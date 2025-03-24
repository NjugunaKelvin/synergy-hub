import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ Import BrowserRouter
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>  {/* ✅ Wrap App inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
