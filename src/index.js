import React from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import App from "./App";
import './reset.css';
import './index.css';


const root = createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, 1000);

reportWebVitals();

