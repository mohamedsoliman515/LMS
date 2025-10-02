/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import style from "./style.module.css";
import api from "../../../services/Axios-global-baseUrl";
import { useUrl } from "../../context/UrlContext";
import { useData } from "../../context/DataContext";
const { backdrop, modal, checkboxLabel, dropdown, dropdownBtn } = style;

const AddModal = ({ open, onClose, fields }) => {
  if (!open) return null;
  // to watch Add immediately in table : get data and (make clone data )
  const { endPoint } = useUrl();
  const { data } = useData();
  const [formData, setFormData] = useState({});
  const [authorities, setAuthorities] = useState([]);

  // Fetch authorities if endpoint is assistants
  useEffect(() => {
    if (endPoint === "/assistants") {
      api.get("/authorities").then((res) => setAuthorities(res.data));
    }
  }, [endPoint]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        const prevValues = Array.isArray(prev[name]) ? prev[name] : [];
        if (checked) {
          // Add the value
          return {
            ...prev,
            [name]: [...prevValues, value],
          };
        } else {
          // delete the value
          return {
            ...prev,
            [name]: prevValues.filter((v) => v !== value),
          };
        }
      } else {
        // (text, number, radio...)
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let submitData;
    if (endPoint === "/courses") {
      submitData = {
        ...formData,
        chapters_ids: formData.chapters_ids || [],
        course_background_image_base64:
          formData.course_background_image_base64 || "",
        is_public: formData.is_public ? true : false,
      };
    } else {
      submitData = { ...formData };
    }

    // Normalize array-like fields (only if they exist)
    [
      "courses_tags",
      "chapters_ids",
      "courses_ids",
      "assistant_authorities",
    ].forEach((key) => {
      if (submitData[key] && typeof submitData[key] === "string") {
        submitData[key] = submitData[key]
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);
      }
    });

    try {
      if (!endPoint) {
        return;
      }
      console.log("Form Submitted:", submitData);
      // send data
      if (endPoint === "/courses") {
        await api.post(`${endPoint}/add-new-courses`, submitData);
      } else {
        await api.post(endPoint, submitData);
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
                  ? { display: "flex", alignItems: "center" }
                  : {}
              }
            >
              <label htmlFor={field.name}>
                {field.type !== "checkbox" && field.label}
              </label>

              {field.type === "select" ? (
                <select
                  name={field.name}
                  id={field.name}
                  onChange={handleChange}
                >
                  {endPoint === "/chapters" &&
                    data.map((item) => (
                      <option key={item.chapter_id} value={item.chapter_id}>
                        {item.chapter_id}
                      </option>
                    ))}
                </select>
              ) : field.name === "is_public" ? (
                <label className={`${checkboxLabel}`}>
                  <input
                    type="checkbox"
                    name={field.name}
                    id={field.id}
                    onChange={handleChange}
                  />
                  Is Public
                </label>
              ) : field.type === "text" ||
                field.type === "number" ||
                field.type === "email" ||
                field.type === "password" ? (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                />
              ) : field.name === "assistant_authorities" ? (
                <div className={dropdown}>
                  <button type="button" className={dropdownBtn}>
                    Select Authorities
                  </button>

                  <div className={style.dropdownContent}>
                    {authorities.map((auth) => (
                      <label key={auth.id} className={checkboxLabel}>
                        <input
                          type="checkbox"
                          name={field.name}
                          value={auth}
                          onChange={handleChange}
                        />
                        {auth}
                      </label>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
          {/*get  if any selections to do it show here  */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
