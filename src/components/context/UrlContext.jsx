import { createContext, useContext, useState } from "react";

// Create Context
const UrlContext = createContext();

// Create Provider
export const UrlProvider = ({ children }) => {
     
  // state to manage dynamic URL
  const [baseUrl, setBaseUrl] = useState("https://api.example.com");

  // function to update
  const updateUrl = (newUrl) => setBaseUrl(newUrl);

  return (
    <UrlContext.Provider value={{ baseUrl, updateUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

// Custom hook (easier to use later)
// eslint-disable-next-line react-refresh/only-export-components
export const useUrl = () => useContext(UrlContext);
