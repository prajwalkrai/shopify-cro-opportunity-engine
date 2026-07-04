const express = require("express");
const router = express.Router();

const scrapeWebsite = require("../services/scraper");
const generateAudit = require("../services/gemini");

router.post("/", async (req, res) => {
  console.log("========================================");
  console.log("🚀 New Audit Request");
  console.log("========================================");

  try {
    const { url, competitor } = req.body;

    console.log("Main Store:", url);
    console.log("Competitor:", competitor || "None");

    // Step 1
    console.log("Step 1: Scraping main website...");
    const website = await scrapeWebsite(url);
    console.log("✅ Main website scraped successfully.");

    let competitorWebsite = null;

    // Step 2
    if (competitor && competitor.trim() !== "") {
      console.log("Step 2: Scraping competitor website...");
      competitorWebsite = await scrapeWebsite(competitor);
      console.log("✅ Competitor website scraped successfully.");
    } else {
      console.log("Step 2: No competitor provided.");
    }

    // Step 3
    console.log("Step 3: Generating Gemini CRO audit...");
    const audit = await generateAudit(website, competitorWebsite);
    console.log("✅ Gemini audit generated successfully.");

    console.log("✅ Sending response to frontend.");

    return res.json({
      website,
      competitorWebsite,
      audit,
    });

  } catch (err) {

    console.log("========================================");
    console.log("❌ AUDIT FAILED");
    console.log("========================================");

    console.error("Error Name:");
    console.error(err.name);

    console.error("Error Message:");
    console.error(err.message);

    console.error("Complete Error:");
    console.error(err);

    console.error("Stack Trace:");
    console.error(err.stack);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

module.exports = router;