import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter.jsx";
import { UrlProvider } from "./components/context/UrlContext.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import { DataProvider } from "./components/context/DataContext.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <UrlProvider>
        <DataProvider>
          <AppRouter />
        </DataProvider>
      </UrlProvider>
    </AuthProvider>
  </StrictMode>
);
