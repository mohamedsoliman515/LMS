

const SearchInput = ({ placeholder = "Search...", value, onChange }) => {
  return (
    <div style={{ position: "relative", width: "50%",marginTop:"20px" }}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "10px 12px 10px 36px", // left space for icon
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "transparent",
          outline: "none",
          color: "rgba(255, 255, 255, 0.87)",
        }}
      />
      {/* Search Icon */}
      <span
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#888",
          pointerEvents: "none",
        }}
      >
        🔍
      </span>
    </div>
  );
};

export default SearchInput;
