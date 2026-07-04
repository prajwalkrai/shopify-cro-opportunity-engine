const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeWebsite(url) {
  console.log("Scraping:", url);

  const { data } = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    },
    timeout: 30000,
  });

  const $ = cheerio.load(data);

  const title = $("title").text().trim();

  const description =
    $('meta[name="description"]').attr("content") || "";

  const h1 = $("h1").first().text().trim();

  const totalImages = $("img").length;

  const totalButtons = $("button").length;

  return {
    title,
    description,
    h1,
    totalImages,
    totalButtons,
  };
}

module.exports = scrapeWebsite;