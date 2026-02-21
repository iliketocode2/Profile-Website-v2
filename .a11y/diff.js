/**
 * diff.js
 * Compares two axe scan JSON files (baseline vs PR head) and outputs a diff.
 * A violation is matched by: rule id + CSS selector target.
 *
 * Usage:
 *   node .a11y/diff.js --baseline baseline.json --head pr.json --output diff.json
 *
 * Exit codes:
 *   0 — no regressions
 *   1 — regressions detected (new violations exist)
 */

const fs = require('fs');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const baselineFile = args.baseline;
const headFile = args.head;
const outputFile = args.output || 'diff.json';

if (!baselineFile || !headFile) {
  console.error('Usage: node diff.js --baseline <file> --head <file> --output <file>');
  process.exit(1);
}

/**
 * Build a fingerprint string for a single violation node.
 * Format: "ruleId::selector1>selector2::htmlLength"
 * Using HTML length (not content) avoids false positives from minor markup tweaks
 * while still distinguishing between different elements.
 */
function fingerprint(violationId, node) {
  const target = node.target.join('>');
  const htmlLen = (node.html || '').length;
  return `${violationId}::${target}::${htmlLen}`;
}

/**
 * Flatten a scan result's pages into a map of:
 *   fingerprint -> { violation metadata, urlPath }
 * This lets us compare across the full site, not just per-page.
 */
function buildFingerprintMap(scanResult) {
  const map = new Map();

  for (const page of scanResult.pages) {
    for (const violation of page.violations) {
      for (const node of violation.nodes) {
        const fp = fingerprint(violation.id, node);
        map.set(fp, {
          id: violation.id,
          impact: violation.impact,
          description: violation.description,
          helpUrl: violation.helpUrl,
          tags: violation.tags || [],
          urlPath: page.urlPath,
          target: node.target,
          html: node.html,
          failureSummary: node.failureSummary,
          fingerprint: fp,
        });
      }
    }
  }

  return map;
}

/**
 * Summarise violation counts by impact level for a scan result.
 */
function countByImpact(fingerprintMap) {
  const counts = { critical: 0, serious: 0, moderate: 0, minor: 0 };
  for (const v of fingerprintMap.values()) {
    if (counts[v.impact] !== undefined) counts[v.impact]++;
    else counts[v.impact] = 1;
  }
  return counts;
}

function main() {
  console.log('\n📊 a11y-diff running');
  console.log(`   baseline : ${baselineFile}`);
  console.log(`   head     : ${headFile}`);
  console.log(`   output   : ${outputFile}\n`);

  const baseline = JSON.parse(fs.readFileSync(baselineFile, 'utf8'));
  const head = JSON.parse(fs.readFileSync(headFile, 'utf8'));

  const baselineMap = buildFingerprintMap(baseline);
  const headMap = buildFingerprintMap(head);

  // New violations: in head but NOT in baseline
  const newViolations = [];
  for (const [fp, v] of headMap) {
    if (!baselineMap.has(fp)) {
      newViolations.push(v);
    }
  }

  // Resolved violations: in baseline but NOT in head
  const resolvedViolations = [];
  for (const [fp, v] of baselineMap) {
    if (!headMap.has(fp)) {
      resolvedViolations.push(v);
    }
  }

  // Unchanged: in both
  const unchangedCount = [...headMap.keys()].filter((fp) => baselineMap.has(fp)).length;

  const baselineCounts = countByImpact(baselineMap);
  const headCounts = countByImpact(headMap);
  const regression = newViolations.length > 0;

  const diff = {
    generatedAt: new Date().toISOString(),
    regression,
    summary: {
      baselineTotal: baselineMap.size,
      headTotal: headMap.size,
      newViolations: newViolations.length,
      resolvedViolations: resolvedViolations.length,
      unchanged: unchangedCount,
    },
    impactDelta: {
      baseline: baselineCounts,
      head: headCounts,
    },
    newViolations,
    resolvedViolations,
  };

  fs.writeFileSync(outputFile, JSON.stringify(diff, null, 2));

  // Human-readable summary to CI logs
  console.log(`  Baseline violations : ${baselineMap.size}`);
  console.log(`  Head violations     : ${headMap.size}`);
  console.log(`  New (regressions)   : ${newViolations.length}`);
  console.log(`  Resolved            : ${resolvedViolations.length}`);
  console.log(`  Unchanged           : ${unchangedCount}`);

  if (regression) {
    console.error(`\n❌ REGRESSION DETECTED — ${newViolations.length} new accessibility violation(s)\n`);

    // Print each new violation to logs for immediate visibility
    for (const v of newViolations) {
      console.error(`  [${v.impact.toUpperCase()}] ${v.id} on ${v.urlPath}`);
      console.error(`    Selector : ${v.target.join(' > ')}`);
      console.error(`    Summary  : ${v.failureSummary}`);
      console.error(`    Help     : ${v.helpUrl}\n`);
    }

    fs.writeFileSync(outputFile, JSON.stringify(diff, null, 2));
    process.exit(1);
  } else {
    console.log('\n✅ No accessibility regressions detected.');
    fs.writeFileSync(outputFile, JSON.stringify(diff, null, 2));
    process.exit(0);
  }
}

main();