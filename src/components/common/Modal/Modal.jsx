/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import style from "./style.module.css";
import api from "../../../services/Axios-global-baseUrl";
import { useUrl } from "../../context/UrlContext";

const { backdrop, modal } = style;

const Modal = ({ open, onClose, fields }) => {
  if (!open) return null;
  const { endPoint } = useUrl();
  const [formData, setFormData] = useState({});

  // Handle input + select changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData };

    // Normalize array-like fields (only if they exist)
    [
      "tags",
      "course_tags",
      "chapters_ids",
      "courses_ids",
      "authorities",
    ].forEach((key) => {
      if (dataToSubmit[key] && typeof dataToSubmit[key] === "string") {
        dataToSubmit[key] = dataToSubmit[key]
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);
      }
    });

    try {
      console.log("Form Submitted:", dataToSubmit);
      // send data
      const response = await api.post(endPoint, dataToSubmit);
      console.log("Server response:", response.data);
      onClose(); // close modal
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    onClose(); // close modal
  };

  return (
    <div className={backdrop}>
      <div className={modal}>
        <button onClick={onClose} style={{ float: "right" }}>
          X
        </button>

        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.id}>
              <label>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
              />
            </div>
          ))}
          {/*get  if any selections to do it show here  */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
