import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./../css/Slide1.css";

const Slide2 = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper relative">
      {/* Animated Background Elements */}
      

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

        {/* Select Field */}
        <select
          value={formData.education}
          onChange={(e) => onChange("education", e.target.value)}
          className="input-field"
        >
          <option value="">Select education level</option>
          <option value="Graduate">Graduate</option>
          <option value="Not Graduate">Not Graduate</option>
        </select>

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

export default Slide2;
