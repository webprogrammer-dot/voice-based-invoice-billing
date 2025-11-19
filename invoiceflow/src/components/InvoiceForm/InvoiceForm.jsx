import React from "react";
import "./InvoiceForm.css";

const InvoiceForm = ({ data, onChange, onGeneratePDF }) => {
  return (
    <div className="invoice-form">
      <h3>🧾 Invoice Details</h3>

      <label>Client Name</label>
      <input
        type="text"
        value={data.client}
        onChange={(e) => onChange({ ...data, client: e.target.value })}
        placeholder="Enter client name"
      />

      <label>Amount (₹)</label>
      <input
        type="number"
        value={data.amount}
        onChange={(e) => onChange({ ...data, amount: e.target.value })}
        placeholder="Enter amount"
      />

      <label>Service Description</label>
      <input
        type="text"
        value={data.service}
        onChange={(e) => onChange({ ...data, service: e.target.value })}
        placeholder="Enter service provided"
      />

      <button className="generate-btn" onClick={onGeneratePDF}>
        Generate PDF
      </button>
    </div>
  );
};

export default InvoiceForm;
