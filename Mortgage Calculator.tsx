import React, { useState } from 'react';
import './App.css';

function App() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [repaymentTime, setRepaymentTime] = useState(30);
  const [interestRate, setInterestRate] = useState(3.5);

  const loanAmount = purchasePrice - downPayment;
  
  const calculateMonthlyPayment = () => {
    // r = monthly interest rate (annual rate / 12)
    const r = interestRate / 100 / 12;
    // n = total number of payments (years * 12 months)
    const n = repaymentTime * 12;
    // P = principal loan amount
    const P = loanAmount;
    
    if (P <= 0) return 0;
    
    // M = P[r(1+r)^n/((1+r)^n)-1)]
    const monthlyPayment = 
      P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      
    return monthlyPayment.toFixed(2);
  };

  return (
    <div className="App">
      <h1>Mortgage Calculator</h1>
      
      <div className="calculator-container">
        <div className="input-group">
          <label>Purchase Price ($):</label>
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
          />
        </div>

        <div className="input-group">
          <label>Down Payment ($):</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
          />
        </div>

        <div className="input-group">
          <label>Repayment Time (years):</label>
          <input
            type="number"
            value={repaymentTime}
            onChange={(e) => setRepaymentTime(Number(e.target.value))}
          />
        </div>

        <div className="input-group">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>

        <div className="results">
          <h2>Results</h2>
          <p>Loan Amount: ${loanAmount}</p>
          <p>Monthly Payment: ${calculateMonthlyPayment()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;