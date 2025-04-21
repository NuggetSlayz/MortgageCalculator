import ReactDOM from "react-dom/client";
import MortgageCalculator from "./components/MortgageCalculator";
import "./styles/App.css";
import 'flag-icons/css/flag-icons.min.css';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<MortgageCalculator />);