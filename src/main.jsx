import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter.jsx";
import { UrlProvider } from "./components/context/UrlContext.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <UrlProvider>
        <AppRouter />
      </UrlProvider>
    </AuthProvider>
  </StrictMode>
);
