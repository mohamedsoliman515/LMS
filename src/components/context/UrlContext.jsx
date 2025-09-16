import { createContext, useContext, useState } from "react";
const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [baseUrl, setBaseUrl] = useState(
    "http://localhost:9090/anchor-frost/courses"
  );

  // function to update url
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
