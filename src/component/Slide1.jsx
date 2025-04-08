import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import "../css/Slide1.css";

const Slide1 = ({ formData, onChange, onNext }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="slide1-wrapper">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="content-wrapper"
        >
          <h2 className="form-title">Number of Dependents</h2>

          <div className="lottie-container">
            <DotLottieReact
              src="https://lottie.host/c6501366-1882-4d3e-9d61-e79f337dae2a/vVSiURfQC4.lottie"
              loop
              autoplay
              style={{ height: 290 }}
            />
          </div>

          <input
            type="number"
            value={formData.no_of_dependents}
            onChange={(e) => onChange("no_of_dependents", e.target.value)}
            className="input-field"
            placeholder="Enter number of dependents"
          />
<div className="button-group">
  <button onClick={() => window.location.reload()} className="refresh-button">
    Refresh
  </button>
  <button onClick={onNext} className="next-button">
    Next
  </button>
</div>

        </motion.div>
      )}
    </div>
  );
};

export default Slide1;
