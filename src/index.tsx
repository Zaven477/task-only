import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HistoricalDates } from "./components/HistoricalDates/HistoricalDates";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HistoricalDates />
  </React.StrictMode>
);
