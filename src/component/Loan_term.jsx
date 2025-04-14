import React, { useMemo, useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loan_term = ({ formData, onChange, onNext, onPrev }) => {
  const loanAmount = parseFloat(formData.loan_amount) || 0;
  const incomeAnnum = parseFloat(formData.income_annum) || 0;
  const loanTerm = parseInt(formData.loan_term) || 0;

  // Dynamically calculate min and max terms
  const { minTerm, maxTerm } = useMemo(() => {
    let min = 1;
    if (loanAmount <= 5000) min = 1;
    else if (loanAmount <= 10000) min = 2;
    else min = 3;

    let max = 30;
    if (incomeAnnum > 0) {
      max = Math.min(30, Math.max(min + 2, Math.floor((loanAmount / incomeAnnum) * 20)));
    }

    return { minTerm: min, maxTerm: max };
  }, [loanAmount, incomeAnnum]);

  // Friendly guidance message
  const [guidanceMessage, setGuidanceMessage] = useState("");

  useEffect(() => {
    if (!loanTerm) {
      setGuidanceMessage("");
    } else if (loanTerm < minTerm) {
      setGuidanceMessage(
        "This loan usually takes longer to repay. You can complete it in less time, but it’ll require higher monthly payments."
      );
    } else if (loanTerm > maxTerm) {
      setGuidanceMessage(
        "This is too long. Please choose a shorter term that better matches your income and loan amount."
      );
    } else {
      setGuidanceMessage("");
    }
  }, [loanTerm, minTerm, maxTerm]);

  return (
    <div className="slide1-wrapper animated-gradient">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Loan Term</h2>
        <p className="info-text">Enter the loan term (in years) you'd prefer to repay the loan:</p>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/f825d80a-fff8-4c4b-825c-0e51351c5b6a/4KmW3OHDsn.lottie"
            loop
            autoplay
            style={{ width: 400, height: 400 }}
          />
        </div>

        {/* Guidance Message */}
        {guidanceMessage && (
          <p
            className="error-message"
            style={{
              color: loanTerm > maxTerm ? "red" : "#f39c12",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {guidanceMessage}
          </p>
        )}

        {/* Loan Term Input */}
        <input
          type="number"
          value={formData.loan_term}
          onChange={(e) => onChange("loan_term", e.target.value)}
          className="input-field"
          placeholder="Enter loan term in years"
        />

        {/* Navigation Buttons */}
        <div className="button-group">
          <button onClick={onPrev} className="refresh-button">
            Back
          </button>
          <button
            onClick={onNext}
            className="next-button"
            disabled={!!guidanceMessage && loanTerm > maxTerm}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loan_term;
