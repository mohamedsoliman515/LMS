import styles from "./style.module.css";
import { useUrl } from "../../components/context/UrlContext";
import { useState } from "react";
import Modal from "../../components/common/Modal/Modal";

const ChangeButton = () => {
  const { button } = styles;
  const { endPoint } = useUrl();

  const [isOpen, setIsOpen] = useState(false);

  let label = "Course";
  if (endPoint === "/chapters") {
    label = "Chapter";
  } else if (endPoint === "/assistants") {
    label = "Assistant";
  }

  return (
    <>
      <button className={button} onClick={() => setIsOpen(true)}>
        <span>+ </span>
        <p>Add New {label}</p>
      </button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChangeButton;
