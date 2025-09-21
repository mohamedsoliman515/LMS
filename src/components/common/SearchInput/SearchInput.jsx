import style from "./style.module.css";

const SearchInput = ({ placeholder = "Search...", value, onChange }) => {
  const { container, input, icon } = style;
  return (
    <div className={container}>
      <input
        className={input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {/* Search Icon */}
      <span className={icon}>🔍</span>
    </div>
  );
};

export default SearchInput;
