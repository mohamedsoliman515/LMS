import styles from "./style.module.css";
import { useUrl } from "../../context/UrlContext";
import { useEffect, useState } from "react";
import AddModal from "../AddModal/AddModal";
import {
  courseFields,
  chaptersFields,
  assistantsFields,
} from "../../../config/formModalFields";
const ChangeAddButton = () => {
  const { button } = styles;
  const { endPoint } = useUrl();
  const [label, setLabel] = useState("Course");

  const [fields, setFields] = useState(courseFields);
  const [isOpen, setIsOpen] = useState(false);

  // Update fields & label when endpoint changes
  useEffect(() => {
    if (endPoint === "/chapters") {
      setFields(chaptersFields);
      setLabel("Chapter");
    } else if (endPoint === "/assistants") {
      setFields(assistantsFields);
      setLabel("Assistant");
    } else {
      setFields(courseFields);
      setLabel("Course");
    }
  }, [endPoint]);

  return (
    <>
      <button className={button} onClick={() => setIsOpen(true)}>
        <span>+ </span>
        <p>Add New {label}</p>
      </button>

      <AddModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        fields={fields}
      />
    </>
  );
};

export default ChangeAddButton;
