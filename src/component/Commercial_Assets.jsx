import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Commercial_Assets = ({ formData, onChange, onNext, onPrev }) => {
  const handleFocus = (e) => {
    if (e.target.value === "0") {
      e.target.value = "";
    }
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      onChange("commercial_assets_value", 0);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    onChange("commercial_assets_value", value === "" ? "" : Number(value));
  };

  return (
    <div className="slide1-wrapper animated-gradient">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Commercial Assets Value (₹)</h2>
        <p className="info-text">
          Please enter the estimated value of your commercial properties or business assets. If none, you can leave it as ₹0.
        </p>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/cafe0e39-43a2-41c9-819e-deb4d35c5651/4DywWeMlCf.lottie"
            loop
            autoplay
            style={{ width: 300, height: 300 }}
          />
        </div>

        {/* Input Field */}
        <input
          type="number"
          value={
            formData.commercial_assets_value === "" ? "" : formData.commercial_assets_value || 0
          }
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="input-field"
          placeholder="Enter Commercial Assets Value"
          min="0"
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

export default Commercial_Assets;
