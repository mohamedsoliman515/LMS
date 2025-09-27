/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import style from "./style.module.css";
const { backdrop, modal } = style;

const Modal = ({ open, onClose, fields, Data }) => {
  if (!open) return null;

  const [formData, setFormData] = useState({ ...Data });

  // Handle input + select changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert tags to array
    const dataToSubmit = {
      ...formData,
      tags: formData.tags.split(",").map((t) => t.trim()),
    };

    console.log("Form Submitted:", dataToSubmit);
    // Here you can add your submission logic (e.g., API call)

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

// <form onSubmit={handleSubmit}>
//         {fields.map((field) => (
//           <div key={field.id}>
//             <label>{field.label}</label>

//             {field.type === "select" ? (
//               <select
//                 name={field.name}
//                 value={formData[field.name] ?? ""}
//                 onChange={handleChange}
//               >
//                 <option value="">-- Select --</option>
//                 {field.options?.map((opt) => (
//                   <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                   </option>
//                 ))}
//               </select>
//             ) : (
//               <input
//                 type={field.type}
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 value={formData[field.name] ?? ""}
//                 onChange={handleChange}
//               />
//             )}
//           </div>
//         ))}

//         <button type="submit">Submit</button>
//       </form>
