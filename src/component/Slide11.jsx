import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Slide11 = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Bank Asset Value (₹)</h2>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/61472f33-2fa4-4c69-a762-ea21d5f4dde6/fqx3QOU8Zl.lottie"
            loop
            autoplay
            style={{ width: 300, height: 300 }}
          />
        </div>

        {/* Input Field */}
        <input
          type="number"
          value={formData.bank_asset_value}
          onChange={(e) => onChange("bank_asset_value", e.target.value)}
          className="input-field"
          placeholder="Enter bank asset value"
        />

        {/* Navigation Buttons */}
        <div className="button-group">
          <button onClick={onPrev} className="refresh-button">
            Back
          </button>
          <button onClick={onNext} className="next-button" style={{ backgroundColor: "#16a34a" }}>
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide11;
