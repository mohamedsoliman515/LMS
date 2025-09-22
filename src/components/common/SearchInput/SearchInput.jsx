import { useEffect, useState } from "react";
import style from "./style.module.css";

const SearchInput = ({ placeholder = "Search..." }) => {
  const { container, input, icon } = style;
  const [value, setValue] = useState("");
  // const filteredItems = items.filter((item) =>
  //   item.toLowerCase().includes(query.toLowerCase())
  // );
  useEffect(() => {
    if (!value) {
      return;
    }
    const timer = setTimeout(() => {}, 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className={container}>
      <input
        className={input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {/* Search Icon */}
      <span className={icon}>🔍</span>
    </div>
  );
};

export default SearchInput;
