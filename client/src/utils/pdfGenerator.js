import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function generatePDF(result, website, competitor) {
  const doc = new jsPDF();

  let y = 20;

  // Title
  doc.setFontSize(22);
  doc.setTextColor(30, 80, 200);
  doc.text("Shopify CRO Opportunity Engine", 14, y);

  y += 10;

  doc.setFontSize(11);
  doc.setTextColor(80);

  doc.text(
    "AI Powered Conversion Rate Optimization Report",
    14,
    y
  );

  y += 15;

  // Website Info
  doc.setFontSize(16);
  doc.setTextColor(0);

  doc.text("Website Information", 14, y);

  y += 6;

  autoTable(doc, {
    startY: y,
    head: [["Field", "Value"]],
    body: [
      ["Website", website || "-"],
      ["Competitor", competitor || "Not Provided"],
      ["Overall Impact", result.overallImpact],
      ["Average Confidence", result.averageConfidence],
      ["Average Effort", result.averageEffort],
    ],
  });

  y = doc.lastAutoTable.finalY + 12;

  // Summary
  doc.setFontSize(16);
  doc.text("Executive Summary", 14, y);

  y += 8;

  doc.setFontSize(11);

  const summary = doc.splitTextToSize(
    result.summary,
    180
  );

  doc.text(summary, 14, y);

  y += summary.length * 6 + 10;

  // Comparison
  if (result.comparison) {
    doc.setFontSize(16);
    doc.text("Competitor Comparison", 14, y);

    y += 6;

    autoTable(doc, {
      startY: y,
      head: [["Category", "Details"]],
      body: [
        ["Winner", result.comparison.winner],
        ["Strengths", result.comparison.strengths],
        ["Weaknesses", result.comparison.weaknesses],
      ],
    });

    y = doc.lastAutoTable.finalY + 12;
  }

  // Opportunities
  doc.setFontSize(16);
  doc.text("Optimization Opportunities", 14, y);

  y += 6;

  autoTable(doc, {
    startY: y,
    head: [[
      "Opportunity",
      "Impact",
      "Confidence",
      "Effort",
      "Reason",
      "Experiment"
    ]],
    body: result.opportunities.map(item => [
      item.title,
      item.impact,
      item.confidence,
      item.effort,
      item.reason,
      item.experiment
    ]),
    styles: {
      fontSize: 9
    }
  });

  // Footer
  const pages = doc.getNumberOfPages();

  for (let i = 1; i <= pages; i++) {

    doc.setPage(i);

    doc.setFontSize(10);

    doc.text(
      `Page ${i} of ${pages}`,
      180,
      290
    );
  }

  doc.save("Shopify-CRO-Audit.pdf");
}