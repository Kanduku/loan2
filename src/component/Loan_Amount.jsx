import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loan_Amount = ({ formData, onChange, onNext, onPrev }) => {
  const [loanAmount, setLoanAmount] = useState(formData.loan_amount || 5000);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    // Check if the loan amount is valid (greater than or equal to 5000)
    if (loanAmount < 5000) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    // Update formData when loanAmount changes
    onChange("loan_amount", loanAmount);
  }, [loanAmount, onChange]);

  const handleLoanAmountChange = (e) => {
    // Parse the input as a number and ensure it's a valid number
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      setLoanAmount(value);
    }
  };

  return (
    <div className="slide1-wrapper animated-gradient">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Loan Amount (₹)</h2>
        <p className="info-text">Please enter the loan amount you'd like to apply for:</p>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/ba8b7b5b-7ef6-425b-b795-be2b02ba5fc0/vMPC0s4gNr.lottie"
            loop
            autoplay
            style={{ width: 300, height: 300 }}
          />
        </div>

        {/* Loan Amount Input */}
        <div>
          {!isValid && loanAmount !== 5000 && (
            <p className="error-message" role="alert" aria-live="assertive">
              The loan amount must be at least ₹5000.
            </p>
          )}
          <input
            type="number"
            value={loanAmount}
            onChange={handleLoanAmountChange}
            onKeyDown={(e) => {
              if(e.key === "Enter" && isValid){
                onNext();
              }
            }}
            className="input-field"
            placeholder="Enter loan amount"
            min="5000"
            aria-label="Loan Amount"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="button-group">
          <button onClick={onPrev} className="refresh-button" aria-label="Go back to previous step">
            Back
          </button>
          <button
            onClick={onNext}
            className="next-button"
            disabled={!isValid}
            aria-label="Go to next step"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loan_Amount;
