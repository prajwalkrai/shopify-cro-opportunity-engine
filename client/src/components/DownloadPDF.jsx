import { jsPDF } from "jspdf";

function DownloadPDF({ websiteData }) {
  const downloadPDF = () => {
    if (!websiteData || !websiteData.audit) {
      alert("No report available.");
      return;
    }

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();

    let y = 20;

    // ===========================
    // Header
    // ===========================

    pdf.setFillColor(37, 99, 235);
    pdf.rect(0, 0, pageWidth, 35, "F");

    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(22);

    pdf.text("Shopify CRO Opportunity Engine", 15, 18);

    pdf.setFontSize(11);

    pdf.text(
      "AI Powered Conversion Rate Optimization Report",
      15,
      27
    );

    y = 48;

    // ===========================
    // Website Information
    // ===========================

    pdf.setTextColor(0, 0, 0);

    pdf.setFontSize(17);
    pdf.setFont("helvetica", "bold");

    pdf.text("Website Information", 15, y);

    y += 10;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);

    pdf.text(
      `Website Title: ${websiteData.website.title || "N/A"}`,
      15,
      y
    );

    y += 8;

    pdf.text(
      `Main Heading: ${websiteData.website.h1 || "N/A"}`,
      15,
      y
    );

    y += 8;

    pdf.text(
      `Images Found: ${websiteData.website.totalImages}`,
      15,
      y
    );

    y += 8;

    pdf.text(
      `Buttons Found: ${websiteData.website.totalButtons}`,
      15,
      y
    );

    y += 8;

    pdf.text(
      `Generated: ${new Date().toLocaleString()}`,
      15,
      y
    );

    y += 18;

    // ===========================
    // CRO Score
    // ===========================

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(17);

    pdf.text("Overall Analysis", 15, y);

    y += 10;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);

    pdf.text(
      `Overall Impact : ${websiteData.audit.overallImpact}`,
      15,
      y
    );

    y += 8;

    pdf.text(
      `Average Confidence : ${websiteData.audit.averageConfidence}`,
      15,
      y
    );

    y += 8;

    pdf.text(
      `Estimated Effort : ${websiteData.audit.averageEffort}`,
      15,
      y
    );

    y += 18;

    // ===========================
    // Executive Summary
    // ===========================

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(17);

    pdf.text("Executive Summary", 15, y);

    y += 10;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);

    const summary = pdf.splitTextToSize(
      websiteData.audit.summary,
      180
    );

    pdf.text(summary, 15, y);

    // Step 1A ends here.
    // Step 1B will continue from here.

   // Move below summary

y += summary.length * 6 + 15;

// ===========================
// Competitor Analysis
// ===========================

if (websiteData.audit.comparison) {

  if (y > 220) {
    pdf.addPage();
    y = 20;
  }

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(17);

  pdf.text("Competitor Analysis", 15, y);

  y += 10;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(12);

  pdf.text(
    `Winner : ${websiteData.audit.comparison.winner || "N/A"}`,
    15,
    y
  );

  y += 8;

  const strengths = pdf.splitTextToSize(
    `Strengths: ${websiteData.audit.comparison.strengths || "N/A"}`,
    180
  );

  pdf.text(strengths, 15, y);

  y += strengths.length * 6 + 5;

  const weaknesses = pdf.splitTextToSize(
    `Weaknesses: ${websiteData.audit.comparison.weaknesses || "N/A"}`,
    180
  );

  pdf.text(weaknesses, 15, y);

  y += weaknesses.length * 6 + 12;
}

pdf.setFont("helvetica", "bold");
pdf.setFontSize(17);

pdf.text("AI Opportunities", 15, y);

y += 12;

websiteData.audit.opportunities.forEach((item, index) => {

  if (y > 220) {
    pdf.addPage();
    y = 20;
  }

  pdf.setFillColor(245,245,245);

  pdf.roundedRect(
    12,
    y - 5,
    185,
    52,
    2,
    2,
    "F"
  );

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(13);

  pdf.text(
    `${index + 1}. ${item.title}`,
    16,
    y + 2
  );

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);

  pdf.text(
    `Impact : ${item.impact}`,
    16,
    y + 10
  );

  pdf.text(
    `Confidence : ${item.confidence}`,
    70,
    y + 10
  );

  pdf.text(
    `Effort : ${item.effort}`,
    145,
    y + 10
  );

  const reason = pdf.splitTextToSize(
    `Reason: ${item.reason}`,
    170
  );

  pdf.text(
    reason,
    16,
    y + 20
  );

  const experiment = pdf.splitTextToSize(
    `Experiment: ${item.experiment}`,
    170
  );

  pdf.text(
    experiment,
    16,
    y + 32 + reason.length * 5
  );

  y +=
    45 +
    reason.length * 5 +
    experiment.length * 5;
});

// ===========================
// Footer with Page Numbers
// ===========================

const pages = pdf.getNumberOfPages();

for (let i = 1; i <= pages; i++) {

  pdf.setPage(i);

  pdf.setDrawColor(220);

  pdf.line(15, 285, 195, 285);

  pdf.setFont("helvetica", "normal");

  pdf.setFontSize(9);

  pdf.setTextColor(120);

  pdf.text(
    "Generated by Shopify CRO Opportunity Engine",
    15,
    291
  );

  pdf.text(
    `Page ${i} of ${pages}`,
    170,
    291
  );

}

// ===========================
// Save PDF
// ===========================

pdf.save("Shopify-CRO-Audit-Report.pdf");
  };

  return (
    <button
      id="downloadPdfBtn"
      onClick={downloadPDF}
      style={{ display: "none" }}
    >
      Download PDF
    </button>
  );
}

export default DownloadPDF;