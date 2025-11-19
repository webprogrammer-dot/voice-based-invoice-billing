
// A basic parser that extracts client name, amount, and service from a spoken sentence

export const parseInvoiceData = (text) => {
  if (!text) return { client: "", amount: "", service: "" };

  // Example spoken input: "Create invoice for John ₹2000 for website design"
  const nameMatch = text.match(/for\s+([A-Z][a-z]+)/i);
  const amountMatch = text.match(/(?:₹|rs|rupees)\s?(\d+)/i);
  const serviceMatch = text.match(/for\s+(?:[A-Z][a-z]+)\s*(.*)/i);

  return {
    client: nameMatch ? nameMatch[1] : "Unknown",
    amount: amountMatch ? amountMatch[1] : "0",
    service: serviceMatch ? serviceMatch[1] : "Not specified",
  };
};
