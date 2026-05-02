import { test, expect } from "@playwright/test";

const mainRoutes = [
  "/",
  "/resume",
  "/projects",
  "/skills",
  "/hobbies",
  "/about",
] as const;

test.describe("smoke", () => {
  for (const path of mainRoutes) {
    test(`loads ${path}`, async ({ page }) => {
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response, `navigation to ${path}`).not.toBeNull();
      expect(response!.status(), `HTTP status for ${path}`).toBeLessThan(400);
      // Layout + some pages each render <main>; use first landmark for smoke visibility.
      await expect(page.getByRole("main").first()).toBeVisible();
    });
  }
});
