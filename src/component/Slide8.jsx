import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Slide8 = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Residential Assets Value (₹)</h2>

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
          value={formData.residential_assets_value}
          onChange={(e) => onChange("residential_assets_value", e.target.value)}
          className="input-field"
          placeholder="Enter value"
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

export default Slide8;
