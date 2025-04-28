import React from "react";
import { createRoot } from "react-dom/client"; // ✅ Corrected import
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ServiceContext from "./Context/ServiceContext.jsx";
import TestimonialContext from "./Context/TestimonialContext.jsx";
import ScrollContext from "./Context/ScrollContext.jsx";

const root = createRoot(document.getElementById("root")); // ✅ Create the root instance
root.render(
  <ScrollContext>
    <ServiceContext>
      <TestimonialContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TestimonialContext>
    </ServiceContext>
  </ScrollContext>
);
