import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./../css/Slide1.css";

const Education_level = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper relative ">
      {/* Content Box */}
      <div className="content-wrapper z-10 relative">
        {/* Title */}
        <h2 className="form-title">Education</h2>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/e1be0441-362b-4dec-8e78-9e5b7511e4f2/EVIIfNjJ9l.lottie"
            loop
            autoplay
            style={{ width: 300, height: 400 }}
          />
        </div>

        {/* Radio Options */}
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name="education"
              value="Graduate"
              checked={formData.education === "Graduate"}
              onChange={(e) => onChange("education", e.target.value)}
            />
            Graduate
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="education"
              value="Not Graduate"
              checked={formData.education === "Not Graduate"}
              onChange={(e) => onChange("education", e.target.value)}
            />
            Not Graduate
          </label>
        </div>

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

export default Education_level;
