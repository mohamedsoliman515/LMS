import { createContext, useContext, useState } from "react";

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [endPoint, setEndpoint] = useState("/courses");
  // function to update url
  const updateEndPoint = (newUrl) => setEndpoint(newUrl);

  return (
    <UrlContext.Provider value={{ endPoint, updateEndPoint }}>
      {children}
    </UrlContext.Provider>
  );
};

// Custom hook (easier to use later)
// eslint-disable-next-line react-refresh/only-export-components
export const useUrl = () => useContext(UrlContext);
