import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TemplateBuilderContextProvider } from "./context/TemplateBuilderContext/TemplateBuilderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TemplateBuilderContextProvider>
      <App />
    </TemplateBuilderContextProvider>
  </React.StrictMode>
);
