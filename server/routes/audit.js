const express = require("express");
const router = express.Router();

const scrapeWebsite = require("../services/scraper");
const generateAudit = require("../services/gemini");

router.post("/", async (req, res) => {
  try {
    const { url, competitor } = req.body;

    console.log("========== NEW REQUEST ==========");
    console.log("Main Store:", url);

    console.log("Step 1: Scraping main website...");
    const website = await scrapeWebsite(url);
    console.log("✅ Main website scraped");

    let competitorWebsite = null;

    if (competitor && competitor.trim() !== "") {
      console.log("Step 2: Scraping competitor...");
      competitorWebsite = await scrapeWebsite(competitor);
      console.log("✅ Competitor scraped");
    }

    console.log("Step 3: Generating Gemini audit...");
    const audit = await generateAudit(website, competitorWebsite);
    console.log("✅ Gemini completed");

    res.json({
      website,
      competitorWebsite,
      audit,
    });
  } catch (err) {
    console.error("FULL ERROR:");
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;