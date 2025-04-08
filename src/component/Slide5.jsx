import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Slide5 = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Loan Amount (₹)</h2>

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
        <input
          type="number"
          value={formData.loan_amount}
          onChange={(e) => onChange("loan_amount", e.target.value)}
          className="input-field"
          placeholder="Enter loan amount"
        />

        {/* Navigation Buttons */}
        <div className="button-group">
          <button onClick={onPrev} className="refresh-button">
            Back
          </button>
          <button onClick={onNext} className="next-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
