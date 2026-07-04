const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateAudit(websiteData, competitorWebsite = null) {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are a senior Shopify CRO consultant.

Analyze this Shopify store.

MAIN STORE

Website Title:
${websiteData.title}

Description:
${websiteData.description}

Main Heading:
${websiteData.h1}

Total Images:
${websiteData.totalImages}

Total Buttons:
${websiteData.totalButtons}

COMPETITOR STORE

${
  competitorWebsite
    ? `
Title:
${competitorWebsite.title}

Description:
${competitorWebsite.description}

Main Heading:
${competitorWebsite.h1}

Total Images:
${competitorWebsite.totalImages}

Total Buttons:
${competitorWebsite.totalButtons}
`
    : "No competitor website provided."
}

Generate a professional CRO audit.

If a competitor is provided, compare both stores and include strengths and weaknesses.

Return ONLY valid JSON in this format.

{
  "summary":"",

  "overallImpact":"High",

  "averageConfidence":"90%",

  "averageEffort":"Medium",

  "comparison":{
    "winner":"",
    "strengths":"",
    "weaknesses":""
  },

  "opportunities":[
    {
      "title":"",
      "impact":"High",
      "confidence":"95%",
      "effort":"Low",
      "reason":"",
      "experiment":""
    },
    {
      "title":"",
      "impact":"Medium",
      "confidence":"88%",
      "effort":"Medium",
      "reason":"",
      "experiment":""
    },
    {
      "title":"",
      "impact":"Low",
      "confidence":"82%",
      "effort":"High",
      "reason":"",
      "experiment":""
    }
  ]
}

Rules:
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap the response inside \`\`\`.
- Generate 4-6 opportunities.
- If competitor data is available, fill the comparison section.
`;

  const result = await model.generateContent(prompt);

  const text = result.response
    .text()
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const audit = JSON.parse(text);

  // -------- PRIORITY SORTING --------

  const impactRank = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  const effortRank = {
    Low: 3,
    Medium: 2,
    High: 1,
  };

  audit.opportunities.sort((a, b) => {

    const scoreA =
      (impactRank[a.impact] || 0) * 10 +
      (effortRank[a.effort] || 0);

    const scoreB =
      (impactRank[b.impact] || 0) * 10 +
      (effortRank[b.effort] || 0);

    return scoreB - scoreA;

  });

  return audit;
}

module.exports = generateAudit;