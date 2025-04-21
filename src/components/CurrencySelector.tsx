import React from 'react';
import '../styles/CurrencySelector.css';

const currencies = [
  { code: "GBP", label: "GBP (£)", flag: "🇬🇧" },
  { code: "USD", label: "USD ($)", flag: "🇺🇸" },
  { code: "EUR", label: "EUR (€)", flag: "🇪🇺" },
  { code: "JPY", label: "JPY (¥)", flag: "🇯🇵" },
  { code: "AUD", label: "AUD (A$)", flag: "🇦🇺" },
  { code: "CAD", label: "CAD (C$)", flag: "🇨🇦" },
  { code: "CHF", label: "CHF", flag: "🇨🇭" },
  { code: "CNY", label: "CNY (¥)", flag: "🇨🇳" },
  { code: "INR", label: "INR (₹)", flag: "🇮🇳" },
  { code: "RUB", label: "RUB (₽)", flag: "🇷🇺" },
  { code: "BRL", label: "BRL (R$)", flag: "🇧🇷" },
  { code: "ZAR", label: "ZAR (R)", flag: "🇿🇦" },
  { code: "MXN", label: "MXN ($)", flag: "🇲🇽" },
  { code: "SGD", label: "SGD ($)", flag: "🇸🇬" },
  { code: "NZD", label: "NZD ($)", flag: "🇳🇿" },
  { code: "HKD", label: "HKD (HK$)", flag: "🇭🇰" },
];

type Props = {
  currency: string;
  setCurrency: (code: string) => void;
};

const CurrencySelector: React.FC<Props> = ({ currency, setCurrency }) => {
  return (
    <div className="custom-select">
      <label>Currency:</label>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {currencies.map((c) => (
          <option key={c.code} value={c.code}>
            {c.flag} {c.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
