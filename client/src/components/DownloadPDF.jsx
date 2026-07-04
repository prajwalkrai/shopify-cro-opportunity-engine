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
        pixelRatio: 2,
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

        pdf.addImage(
          dataUrl,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight
        );

        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;

          pdf.addPage();

          pdf.addImage(
            dataUrl,
            "PNG",
            0,
            position,
            imgWidth,
            imgHeight
          );

          heightLeft -= pageHeight;
        }

        pdf.save("Shopify-CRO-Audit.pdf");
      };
    } catch (err) {
      console.error(err);
      alert(err.message);
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