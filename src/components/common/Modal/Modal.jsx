/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import style from "./style.module.css";
const { backdrop, modal } = style;

const Modal = ({ open, onClose, fields, Data }) => {
  if (!open) return null;

  const [formData, setFormData] = useState(Data);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert tags to array
    const dataToSubmit = {
      ...formData,
      tags: formData.tags.split(",").map((t) => t.trim()),
    };

    console.log("Form Submitted:", dataToSubmit);

    // TODO: send with axios
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
