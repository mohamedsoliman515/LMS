import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext"; // adjust path if needed
import style from "./style.module.css";

const SearchInput = ({ placeholder = "Search..." }) => {
  const { container, input, icon } = style;
  const [search, setSearch] = useState("");
  const { updateSearch } = useData();

  useEffect(() => {
    if (!search) return;
    updateSearch(search);
  }, [search]);

  return (
    <div className={container}>
      <input
        className={input}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
      />
      {/* Search Icon */}
      <span className={icon}>🔍</span>
    </div>
  );
};

export default SearchInput;
