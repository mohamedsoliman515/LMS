import styles from "./style.module.css";
import AddButton from "../../../Hooks/AddButton/AddButton";
const Header = () => {
  const { header } = styles;
  return (
    <div className={header}>
      <h1>Manage Courses</h1>
      {/* validation on buttons think do it smart : fun take props and call modal based on endpoint  */}

      <AddButton />
    </div>
  );
};

export default Header;
