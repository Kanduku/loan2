import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Luxury_Assets = ({ formData, onChange, onNext, onPrev }) => {
  const handleFocus = (e) => {
    if (e.target.value === "0") {
      e.target.value = "";
    }
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      onChange("luxury_assets_value", 0);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    onChange("luxury_assets_value", value === "" ? "" : Number(value));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onNext();
    }
  };

  return (
    <div className="slide1-wrapper animated-gradient">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Luxury Assets Value (₹)</h2>
        <p className="info-text">
          Please enter the current market value of your luxury assets (e.g., cars, jewelry, collectibles). If you don’t own any, you can leave it as ₹0.
        </p>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/7527ccc7-d9de-4a5a-bb85-c4966fff60de/U2Qulsqv2s.lottie"
            loop
            autoplay
            style={{ width: 400, height: 400 }}
          />
        </div>

        {/* Input Field */}
        <input
          type="number"
          value={
            formData.luxury_assets_value === "" ? 0 : formData.luxury_assets_value || 0
          }
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress} // Add the onKeyPress handler
          className="input-field"
          placeholder="Enter Luxury Assets Value"
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

export default Luxury_Assets;
