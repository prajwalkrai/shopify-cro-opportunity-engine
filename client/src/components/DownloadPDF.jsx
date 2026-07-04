import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

function DownloadPDF() {
  const downloadPDF = async () => {
    try {
      const report = document.getElementById("report");

      if (!report) {
        alert("Report not found.");
        return;
      }

      const dataUrl = await toPng(report, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: "#ffffff",
      });

      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const img = new Image();
      img.src = dataUrl;

      img.onload = () => {
        const imgWidth = pageWidth;
        const imgHeight = (img.height * imgWidth) / img.width;

        let heightLeft = imgHeight;
        let position = 0;

        // First page
        pdf.addImage(
          dataUrl,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight,
          "",
          "FAST"
        );

        heightLeft -= pageHeight;

        // Additional pages
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;

          pdf.addPage();

          pdf.addImage(
            dataUrl,
            "PNG",
            0,
            position,
            imgWidth,
            imgHeight,
            "",
            "FAST"
          );

          heightLeft -= pageHeight;
        }

        // Footer with page numbers
        const pages = pdf.getNumberOfPages();

        for (let i = 1; i <= pages; i++) {
          pdf.setPage(i);

          pdf.setFontSize(10);

          pdf.setTextColor(120);

          pdf.text(
            `Shopify CRO Opportunity Engine`,
            14,
            290
          );

          pdf.text(
            `Page ${i} of ${pages}`,
            175,
            290
          );
        }

        pdf.save("Shopify-CRO-Audit.pdf");
      };
    } catch (err) {
      console.error(err);
      alert("Unable to generate PDF.");
    }
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