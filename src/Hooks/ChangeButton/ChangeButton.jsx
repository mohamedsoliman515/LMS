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

  // const handleModal = () => {
  //   if (endPoint === "/chapters") {
  //     console.log("chapters");
  //   } else if (endPoint === "/assistants") {
  //     console.log("assistants");
  //   } else {
  //     console.log("courses");
  //   }
  // };

  return (
    <button
      className={button}
      //  onClick={handleModal}
    >
      <span>+ </span>
      <p>Add New {label}</p>
    </button>
  );
};

export default ChangeButton;
