import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Slide10 = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Luxury Assets Value (₹)</h2>

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
          value={formData.luxury_assets_value}
          onChange={(e) => onChange("luxury_assets_value", e.target.value)}
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

export default Slide10;
