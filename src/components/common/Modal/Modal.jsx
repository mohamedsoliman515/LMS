/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import style from "./style.module.css";
const { backdrop, modal, checkboxLabel } = style;

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tags: "",
    isPublic: false,
    price: "",
  });

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
          <div>
            <label>Name:</label>
            <input name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div>
            <label>Description:</label>
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div>
            <label>Tags (comma separated):</label>
            <input name="tags" value={formData.tags} onChange={handleChange} />
          </div>

          <div className={checkboxLabel}>
            <label>Is Public</label>
            <input
              type="checkbox"
              name="isPublic"
              checked={formData.isPublic}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
