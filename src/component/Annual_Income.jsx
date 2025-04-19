import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Annual_Income = ({ formData, onChange, onNext, onPrev }) => {
  const [income, setIncome] = useState(formData.income_annum || 15000);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    // Check if the income is valid (greater than or equal to 15000)
    if (income < 14999 && income !== 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    // Update formData when income changes
    onChange("income_annum", income);
  }, [income, onChange]);

  const handleIncomeChange = (e) => {
    // Parse the input as a number and ensure it's a valid number
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      setIncome(value);
    }
  };

  return (
    <div className="slide1-wrapper animated-gradient">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Annual Income (₹)</h2>
        <p className="info-text">Please enter your annual income below:</p>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/5d5b9435-f489-42f7-977c-440265beb236/KxNxyiG97L.lottie"
            loop
            autoplay
            style={{ width: 380, height: 350 }}
          />
        </div>

        {/* Income Input */}
        <div>
          {!isValid && income !== 0 && (
            <p className="error-message" role="alert" aria-live="assertive">
              Income must be at least ₹15,000 to be eligible for a loan.
            </p>
          )}
          <input
            type="number"
            value={income}
            onChange={handleIncomeChange}
            onKeyDown={(e) => {
              if(e.key === "Enter" && isValid){
                onNext();
              }
            }}
            className="input-field"
            placeholder="Enter your annual income"
            min="15000"
            aria-label="Annual Income"
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

export default Annual_Income;
