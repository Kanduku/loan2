import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Bank_Asset = ({ formData, onChange, onNext, onPrev }) => {
  const handleFocus = (e) => {
    if (e.target.value === "0") {
      e.target.value = "";
    }
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      onChange("bank_asset_value", 0);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    onChange("bank_asset_value", value === "" ? "" : Number(value));
  };

  return (
    <div className="slide1-wrapper animated-gradient bubbles">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Bank Asset Value (₹)</h2>
        <p className="info-text">
          Please enter the total value of your bank assets (e.g., savings accounts, fixed deposits, etc.). If you don’t have any, you can leave it as ₹0.
        </p>

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
          value={
            formData.bank_asset_value === "" ? "" : formData.bank_asset_value || 0
          }
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="input-field"
          placeholder="Enter Bank Asset Value "
          min="0"
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

export default Bank_Asset;
