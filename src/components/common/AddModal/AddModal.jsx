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
    const { name, type, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? false : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData };

    // Normalize array-like fields (only if they exist)
    [
      "courses_tags",
      "chapters_ids",
      "courses_ids",
      "assistant_authorities",
    ].forEach((key) => {
      if (dataToSubmit[key] && typeof dataToSubmit[key] === "string") {
        dataToSubmit[key] = dataToSubmit[key]
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);
      }
    });

    try {
      if (!endPoint) {
        return;
      }
      console.log("Form Submitted:", dataToSubmit);
      // send data
      if (endPoint === "/courses") {
        await api.post(`${endPoint}/add-new-courses`, dataToSubmit);
      } else {
        await api.post(endPoint, dataToSubmit);
      }
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
            <div
              key={field.id}
              style={
                field.type === "checkbox"
                  ? { display: "flex", gap: "10px", alignItems: "center" }
                  : {}
              }
            >
              <label htmlFor={field.name}>{field.label}</label>

              {field.type === "select" ? (
                <select
                  name={field.name}
                  id={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                >
                  {field.options?.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : field.type === "checkbox" ? (
                <input
                  type="checkbox"
                  name={field.name}
                  id={field.name}
                  checked={!!formData[field.name]}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                />
              )}
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
