import styles from "./style.module.css";
import ChangeButton from "../ChangeButton/ChangeButton";
const Header = () => {
  const { header } = styles;
  return (
    <div className={header}>
      <h1>Manage Courses</h1>
      <ChangeButton />
    </div>
  );
};

export default Header;
