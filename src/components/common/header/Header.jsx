import styles from "./style.module.css";
const Header = () => {
  const { header, button } = styles;
  return (
    <div className={header}>
      <h1>Manage Courses</h1>
      <button className={button}>
        <span>+ </span>
        <p> Add New Course</p>
      </button>
    </div>
  );
};

export default Header;
