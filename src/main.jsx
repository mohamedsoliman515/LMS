import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter.jsx";
import { AuthProvider, UrlProvider } from "./components/context";
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
