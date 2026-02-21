/**
 * scan.js
 * Launches a headless Playwright browser, navigates to each configured URL,
 * injects axe-core via @axe-core/playwright, and writes structured JSON output.
 *
 * Usage:
 *   node .a11y/scan.js --baseUrl http://localhost:3000 --output baseline.json
 */

const { chromium } = require('playwright');
const { AxeBuilder } = require('@axe-core/playwright');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const baseUrl = (args.baseUrl || 'http://localhost:3000').replace(/\/$/, '');
const outputFile = args.output || 'scan-output.json';

const config = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8')
);

async function scanPage(page, urlPath, config) {
  const fullUrl = `${baseUrl}${urlPath}`;
  console.log(`  → Scanning ${fullUrl}`);

  await page.goto(fullUrl, { waitUntil: 'domcontentloaded' });

  if (config.waitForNetworkIdle) {
    try {
      await page.waitForLoadState('networkidle', { timeout: 10000 });
    } catch {
      console.warn(`  ⚠ networkidle timeout on ${urlPath}, continuing`);
    }
  }

  if (config.extraWaitMs > 0) {
    await page.waitForTimeout(config.extraWaitMs);
  }

  let axeBuilder = new AxeBuilder({ page });

  if (config.ignore && config.ignore.length > 0) {
    axeBuilder = axeBuilder.disableRules(config.ignore);
  }

  const results = await axeBuilder.analyze();

  return {
    urlPath,
    fullUrl,
    violations: results.violations,
    passCount: results.passes.length,
    incompleteCount: results.incomplete.length,
    timestamp: new Date().toISOString(),
  };
}

async function main() {
  console.log('\n🔍 a11y-diff scanner starting');
  console.log(`   baseUrl : ${baseUrl}`);
  console.log(`   output  : ${outputFile}`);
  console.log(`   urls    : ${config.urls.join(', ')}\n`);

  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  const pages = [];
  const errors = [];

  for (const urlPath of config.urls) {
    try {
      const result = await scanPage(page, urlPath, config);
      pages.push(result);
      console.log(`  ✓ ${urlPath} — ${result.violations.length} violation(s) found`);
    } catch (err) {
      console.error(`  ✗ Error scanning ${urlPath}: ${err.message}`);
      errors.push({ urlPath, error: err.message });
    }
  }

  await browser.close();

  const output = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    pages,
    errors,
  };

  fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));
  console.log(`\n✅ Scan written to ${outputFile}`);

  if (errors.length > 0) {
    console.error(`\n❌ ${errors.length} page(s) failed to scan.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('\n💥 Fatal scan error:', err.message);
  process.exit(1);
});