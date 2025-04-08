import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Slide5 = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Loan term (₹)</h2>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/e1be0441-362b-4dec-8e78-9e5b7511e4f2/EVIIfNjJ9l.lottie"
            loop
            autoplay
            style={{ width: 300, height: 300 }}
          />
        </div>

        {/* Loan Amount Input */}
        <input
          type="number"
          value={formData.loan_term}
          onChange={(e) => onChange("loan_term", e.target.value)}
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
