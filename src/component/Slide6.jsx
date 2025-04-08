import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Slide5 = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Loan term </h2>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/f825d80a-fff8-4c4b-825c-0e51351c5b6a/4KmW3OHDsn.lottie"
            loop
            autoplay
            style={{ width: 400, height: 400 }}
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
