import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} VoiceInvoice. Built with 💙 using React.
      </p>
    </footer>
  );
};

export default Footer;
