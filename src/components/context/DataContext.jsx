import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const updateData = (data) => {
    setData(data);
  };
  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <DataContext.Provider value={{ data, updateData, search, updateSearch }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook (easier to use later)
// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext);
