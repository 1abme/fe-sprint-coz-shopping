import React from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import App from "./App";
import './reset.css';
import './index.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";


const root = createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}, 1000);

reportWebVitals();

