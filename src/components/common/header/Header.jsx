import styles from "./style.module.css";
const Header = () => {
  const { header, button } = styles;
  return (
    <div className={header}>
      <h1>Manage Courses</h1>
      {/* validation on buttons think do it smart : fun take props and call modal based on endpoint  */}

      <button className={button}>
        <span>+ </span>
        <p> Add New Course</p>
      </button>
    </div>
  );
};

export default Header;
