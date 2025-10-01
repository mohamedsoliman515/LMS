// export default EditModal;
import { useEffect, useState } from "react";
import style from "./style.module.css";
import api from "../../../services/Axios-global-baseUrl";
import { useUrl } from "../../context/UrlContext";

const { backdrop, modal } = style;

export default function EditModal({ open, onClose, item, onUpdate }) {
  const { endPoint } = useUrl();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (item) {
      setFormData(item);
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`${endPoint}/${formData.id}`, formData);
      onUpdate(formData);
      onClose();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  if (!open) return null;

  return (
    <div className={backdrop}>
      <div className={modal}>
        <button onClick={onClose} style={{ float: "right" }}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label>{key}</label>
              <input
                type="text"
                name={key}
                value={formData[key] ?? ""}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
