const { chromium } = require("playwright");

async function scrapeWebsite(url) {
  const browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    viewport: {
      width: 1366,
      height: 768,
    },
  });

  const page = await context.newPage();

  console.log("Opening:", url);

  await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await page.waitForTimeout(5000);

  const title = await page.title();

  const description =
    (await page.locator('meta[name="description"]').getAttribute("content")) || "";

  const h1 = await page.locator("h1").first().textContent().catch(() => "");

  const totalImages = await page.locator("img").count();

  const totalButtons = await page.locator("button").count();

  await browser.close();

  return {
    title,
    description,
    h1,
    totalImages,
    totalButtons,
  };
}

module.exports = scrapeWebsite;