import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Residential_Assets = ({ formData, onChange, onNext, onPrev }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      onChange("residential_assets_value", ""); // Set it as an empty string if the user cleared the input
    } else {
      onChange("residential_assets_value", value); // Otherwise, just update the value
    }
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
        <h2 className="form-title">Residential Assets Value (₹)</h2>
        <p className="info-text">
          Please enter the current market value of your owned residential assets (if any). If you don’t own any, you can leave it as ₹0.
        </p>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/ab08bbd4-54e0-437e-8f2d-b770e1c040ca/UJYJR1y60h.lottie"
            loop
            autoplay
            style={{ width: 450, height: 400 }}
          />
        </div>

        {/* Input Field */}
        <input
          type="number"
          value={formData.residential_assets_value || 0}
          onChange={handleChange}
          onKeyPress={handleKeyPress} // Add the onKeyPress handler
          className="input-field"
          placeholder="Enter Residential Assets Value"
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

export default Residential_Assets;
