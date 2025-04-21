import React, { useState } from "react";
import MortgageCalculator from "./components/MortgageCalculator";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <button className="toggle-mode" onClick={toggleMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <h1>Mortgage Calculator</h1>
      <MortgageCalculator />
    </div>
  );
}

export default App;
