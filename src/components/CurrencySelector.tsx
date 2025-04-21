import React, { useState } from 'react';
import '../styles/CurrencySelector.css';

// Updated currency array with country codes for flag-icons
const currencies = [
    { code: "GBP", label: "GBP (£)", countryCode: "gb" },
    { code: "USD", label: "USD ($)", countryCode: "us" },
    { code: "EUR", label: "EUR (€)", countryCode: "eu" },
    { code: "JPY", label: "JPY (¥)", countryCode: "jp" },
    { code: "AUD", label: "AUD (A$)", countryCode: "au" },
    { code: "CAD", label: "CAD (C$)", countryCode: "ca" },
    { code: "CHF", label: "CHF", countryCode: "ch" },
    { code: "CNY", label: "CNY (¥)", countryCode: "cn" },
    { code: "INR", label: "INR (₹)", countryCode: "in" },
    { code: "RUB", label: "RUB (₽)", countryCode: "ru" },
    { code: "BRL", label: "BRL (R$)", countryCode: "br" },
    { code: "ZAR", label: "ZAR (R)", countryCode: "za" },
    { code: "MXN", label: "MXN ($)", countryCode: "mx" },
    { code: "SGD", label: "SGD ($)", countryCode: "sg" },
    { code: "NZD", label: "NZD ($)", countryCode: "nz" },
    { code: "HKD", label: "HKD (HK$)", countryCode: "hk" },
  ];

  type Props = {
    currency: string;
    setCurrency: (code: string) => void;
  };
  
  const CurrencySelector: React.FC<Props> = ({ currency, setCurrency }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const selectedCurrency = currencies.find(c => c.code === currency);
  
    return (
      <div className="custom-dropdown">
        <label>Currency:</label>
        <div
          className="dropdown-header"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {selectedCurrency && (
            <>
              <span className={`fi fi-${selectedCurrency.countryCode}`}></span>
              {selectedCurrency.label}
            </>
          )}
          <span className="arrow">{isOpen ? '▲' : '▼'}</span>
        </div>
  
        {isOpen && (
          <ul className="dropdown-list">
            {currencies.map((c) => (
              <li
                key={c.code}
                onClick={() => {
                  setCurrency(c.code);
                  setIsOpen(false);
                }}
                className="dropdown-option"
              >
                <span className={`fi fi-${c.countryCode}`}></span>
                {c.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default CurrencySelector;