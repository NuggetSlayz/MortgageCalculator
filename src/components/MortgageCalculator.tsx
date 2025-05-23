import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import CurrencySelector from '../components/CurrencySelector';

function App() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [repaymentTime, setRepaymentTime] = useState(30);
  const [interestRate, setInterestRate] = useState(3.5);
  const [currency, setCurrency] = useState("GBP"); // Currency state

  // Currency symbol mapping
  const currencySymbols: { [key: string]: string } = {
    GBP: "£",
    USD: "$",
    EUR: "€",
    JPY: "¥",
    AUD: "A$",
    CAD: "C$",
    CHF: "CHF",
    CNY: "¥",
    INR: "₹",
    RUB: "₽",
    BRL: "R$",
    ZAR: "R",
    MXN: "$",
    SGD: "$",
    NZD: "$",
    HKD: "HK$",
  };

  // Format numbers to local currency
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('en-GB', {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(value);

  useEffect(() => {
    // Check if there are saved values in localStorage
    const savedData = localStorage.getItem('mortgageData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setPurchasePrice(data.purchasePrice);
      setDownPayment(data.downPayment);
      setRepaymentTime(data.repaymentTime);
      setInterestRate(data.interestRate);
      if (data.currency) setCurrency(data.currency); // Restore currency
    }
  }, []);

  useEffect(() => {
    // Save values to localStorage whenever they change
    const data = { purchasePrice, downPayment, repaymentTime, interestRate, currency };
    localStorage.setItem('mortgageData', JSON.stringify(data));
  }, [purchasePrice, downPayment, repaymentTime, interestRate, currency]);
  
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

  // Toggle between light and dark modes
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <button className="toggle-mode" onClick={toggleMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <h1>Mortgage Calculator</h1>
      
      <div className="calculator-container">
        {/* ✅ New: Currency selector */}
        <div className="input-group">
          <CurrencySelector currency={currency} setCurrency={setCurrency} />
        </div>

        <div className="input-group">
          <label>Purchase Price ({currencySymbols[currency]}):</label>
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
          />
        </div>

        <div className="input-group">
          <label>Down Payment ({currencySymbols[currency]}):</label>
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
          <p>Loan Amount: {formatCurrency(loanAmount)}</p>
          <p>Monthly Payment: {formatCurrency(Number(calculateMonthlyPayment()))}</p>
        </div>
      </div>
    </div>
  );
}

export default App;