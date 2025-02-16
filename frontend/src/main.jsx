import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SiteLayout from "./layouts/SiteLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SiteLayout>
        <App />
      </SiteLayout>
    </BrowserRouter>
  </StrictMode>
);
