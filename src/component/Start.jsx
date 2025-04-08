import React from "react";
import "../css/start.css";

const Start = ({ onStart, setCsvData }) => {
  const handleStart = () => {
    onStart();
    setTimeout(async () => {
      try {
        await fetch("https://loan-approval-h5dw.onrender.com/predict-loan/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            no_of_dependents: 5,
            education: "Graduate",
            self_employed: "No",
            income_annum: 500000,
            loan_amount: 200000,
            loan_term: 12,
            cibil_score: 8,
            residential_assets_value: 100,
            commercial_assets_value: 300000,
            luxury_assets_value: 150000,
            bank_asset_value: 200000,
          }),
        });

        const res = await fetch("https://loan-approval-h5dw.onrender.com/api/csv-data/");
        const data = await res.json();
        setCsvData(data);
      } catch (err) {
        console.error("Start background call failed", err);
      }
    }, 500);
  };

  return (
    <div className="start-container">
      <div className="animation-wrapper">
        <div className="happy-character"></div>
        <div className="coin coin1"></div>
        <div className="coin coin2"></div>
        <div className="coin coin3"></div>
        <div className="magnify"></div>
        <div className="sparkle sparkle1"></div>
        <div className="sparkle sparkle2"></div>
        <div class="note note1"></div>
<div class="note note2"></div>
<div class="note note3"></div>
      </div>

      <div className="content">
        <h1>Check Your Loan Eligibility</h1>
        <p>A few quick questions to see your preliminary loan eligibility.</p>
        <button onClick={handleStart}>Begin Eligibility Check</button>
      </div>
    </div>
  );
};

export default Start;
