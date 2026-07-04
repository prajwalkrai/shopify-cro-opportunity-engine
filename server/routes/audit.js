const express = require("express");
const router = express.Router();

const scrapeWebsite = require("../services/scraper");
const generateAudit = require("../services/gemini");

router.post("/", async (req, res) => {

  try {

    const { url, competitor } = req.body;

    console.log("Main Store:", url);

    const website = await scrapeWebsite(url);

    let competitorWebsite = null;

    if (competitor && competitor.trim() !== "") {

      console.log("Competitor:", competitor);

      competitorWebsite = await scrapeWebsite(competitor);

    }

    const audit = await generateAudit(
      website,
      competitorWebsite
    );

    res.json({
      website,
      competitorWebsite,
      audit
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: "Unable to analyze website."
    });

  }

});

module.exports = router;