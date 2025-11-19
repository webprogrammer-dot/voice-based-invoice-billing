import React, { useState } from "react";
import "./Home.css";
import VoiceInput from "../../components/VoiceInput/VoiceInput";
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import { parseInvoiceData } from "../../utils/parseInvoice";
import { generateInvoicePDF } from "../../utils/generatePdf";

const Home = () => {
  const [invoiceData, setInvoiceData] = useState({
    client: "",
    amount: "",
    service: "",
  });

  const handleVoiceResult = (transcript) => {
    const parsed = parseInvoiceData(transcript);
    setInvoiceData(parsed);
  };

  return (
    <main id="home" className="home-container">
      <section className="hero-section">
        <h1>🎙️ Voice-Based Invoice Creator</h1>
        <p>Generate professional invoices hands-free using your voice.</p>
      </section>

      <section className="main-section">
        <VoiceInput onVoiceResult={handleVoiceResult} />
        <InvoiceForm
          data={invoiceData}
          onChange={setInvoiceData}
          onGeneratePDF={() => generateInvoicePDF(invoiceData)}
        />
      </section>
    </main>
  );
};

export default Home;
