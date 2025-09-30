import styles from "./style.module.css";
import ChangeAddButton from "../ChangeAddButton/ChangeAddButton";
const Header = () => {
  const { header } = styles;
  return (
    <div className={header}>
      <h1>Manage Courses</h1>
      <ChangeAddButton />
    </div>
  );
};

export default Header;
