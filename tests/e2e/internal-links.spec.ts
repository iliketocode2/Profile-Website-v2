import { test, expect } from "@playwright/test";

/** Same-origin path only; strips query and hash. */
function internalPathFromHref(href: string | null): string | null {
  if (!href || href === "#") return null;
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  const path = href.split("#")[0].split("?")[0];
  if (!path) return "/";
  if (/\.(png|jpe?g|gif|webp|svg|ico|pdf|zip|txt|xml|json)$/i.test(path)) {
    return null;
  }
  return path;
}

/** Same as smoke routes. */
const seedPaths = [
  "/",
  "/resume",
  "/projects",
  "/skills",
  "/hobbies",
];

test.describe("internal links", () => {
  test("anchors on main routes resolve", async ({ page, request }) => {
    const paths = new Set<string>();

    for (const path of seedPaths) {
      const nav = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(nav?.status(), `open ${path}`).toBeLessThan(400);

      const hrefs = await page.locator("a[href]").evaluateAll((anchors) =>
        anchors.map((a) => (a as HTMLAnchorElement).getAttribute("href")),
      );

      for (const href of hrefs) {
        const internal = internalPathFromHref(href);
        if (internal) paths.add(internal);
      }
    }

    for (const p of paths) {
      const res = await request.get(p);
      expect(res.ok(), `GET ${p} — status ${res.status()}`).toBeTruthy();
    }
  });
});
