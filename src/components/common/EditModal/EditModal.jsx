import { useEffect, useState } from "react";
import style from "./style.module.css";
import api from "../../../services/Axios-global-baseUrl";
import { useUrl } from "../../context/UrlContext";

const { backdrop, modal } = style;

export default function EditModal({ open, onClose, item, onUpdate }) {
  const { endPoint } = useUrl();
  const [formData, setFormData] = useState({});
  const [fieldsToShow, setFieldsToShow] = useState([]);

  // Define fields per endpoint
  const fieldMap = {
    "/courses": ["course_name", "course_description", "is_public"],
    "/chapters": ["chapter_name", "chapter_description"],
    "/assistants": [
      "assistant_name",
      "assistant_email",
      "assistant_phone1",
      "assistant_phone2",
      "assistant_password",
      "assistant_authorities",
    ],
  };

  // When item changes or endpoint changes
  useEffect(() => {
    if (item) {
      // Only pick allowed fields based on endpoint
      const allowedFields = fieldMap[endPoint] || Object.keys(item);
      const filtered = {};
      allowedFields.forEach((key) => {
        if (item[key] !== undefined) filtered[key] = item[key];
      });
      setFormData(filtered);
      setFieldsToShow(allowedFields);
    }
  }, [item, endPoint]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      // Handle array fields like assistant_authorities
      const checked = e.target.checked;
      setFormData((prev) => {
        const prevValues = Array.isArray(prev[name]) ? prev[name] : [];
        return {
          ...prev,
          [name]: checked
            ? [...prevValues, value]
            : prevValues.filter((v) => v !== value),
        };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  console.log("item", item);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const oldItem = { ...item };
    onUpdate({ ...item, ...formData });
    try {
      await api.put(
        `${endPoint}/${item.course_id || item.chapter_id || item.assistant_id}`,
        formData
      );
      onClose();
    } catch (error) {
      console.error("Error updating item:", error);
      onUpdate(oldItem);
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
          {fieldsToShow.map((key) => (
            <div key={key}>
              <label>{key.replaceAll("_", " ")}</label>

              {Array.isArray(formData[key]) ? (
                // Handle multi-select checkbox (like assistant_authorities)
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  {formData[key].map((auth) => (
                    <label key={auth}>
                      <input
                        type="checkbox"
                        name={key}
                        value={auth}
                        checked={formData[key].includes(auth)}
                        onChange={handleChange}
                      />
                      {auth}
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  name={key}
                  value={formData[key] ?? ""}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
