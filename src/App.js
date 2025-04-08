import React, { useState } from "react";
import Slide1 from "./component/Slide1";
import Slide2 from "./component/Slide2";
import Slide3 from "./component/Slide3";
import Slide4 from "./component/Slide4";
import Slide5 from "./component/Slide5";
import Slide6 from "./component/Slide6";
import Slide7 from "./component/Slide7";
import Slide8 from "./component/Slide8";
import Slide9 from "./component/Slide9";
import Slide10 from "./component/Slide10";
import Slide11 from "./component/Slide11";
import Slide12 from "./component/Slide12";
import Start from "./component/Start";

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
];

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [csvData, setCsvData] = useState(null); // will hold API GET result
  const [formData, setFormData] = useState({
    no_of_dependents: "",
    education: "",
    self_employed: "",
    income_annum: "",
    loan_amount: "",
    loan_term: "",
    cibil_score: "",
    residential_assets_value: "",
    commercial_assets_value: "",
    luxury_assets_value: "",
    bank_asset_value: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-lg">
        {!hasStarted ? (
          <Start
            onStart={() => {
              setHasStarted(true);
              setCurrentSlide(0); // Immediately move to Slide1
            }}
            setCsvData={setCsvData}
          />
        ) : (
          <CurrentSlideComponent
            formData={formData}
            onChange={handleChange}
            onNext={handleNext}
            onPrev={handlePrev}
            csvData={csvData} // Slide12 will use this
          />
        )}
      </div>
    </div>
  );
};

export default App;
