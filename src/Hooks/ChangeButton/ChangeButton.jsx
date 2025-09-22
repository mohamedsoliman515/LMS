import styles from "./style.module.css";
import { useUrl } from "../../components/context/UrlContext";

const ChangeButton = () => {
  const { button } = styles;
  const { endPoint } = useUrl();

  let label = "Course";
  if (endPoint === "/chapters") {
    label = "Chapter";
  } else if (endPoint === "/assistants") {
    label = "Assistant";
  }

  return (
    <button className={button}>
      <span>+ </span>
      <p>Add New {label}</p>
    </button>
  );
};

export default ChangeButton;
