import jsPDF from "jspdf";

export const generateInvoicePDF = (data) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("INVOICE", 85, 20);

  doc.setFontSize(12);
  doc.text(`Client Name: ${data.client}`, 20, 40);
  doc.text(`Service: ${data.service}`, 20, 50);
  doc.text(`Amount: ₹${data.amount}`, 20, 60);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 70);

  doc.line(20, 75, 190, 75); // separator line

  doc.text("Thank you for your business!", 20, 90);

  doc.save(`invoice_${data.client}.pdf`);
};
