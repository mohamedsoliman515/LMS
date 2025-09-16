import { Edit, Delete } from "../../../assets";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUrl } from "../../context/UrlContext";
import styles from "./styles.module.css";

export default function CourseTable() {
  const { container, mainTable, actions } = styles;

  const { baseUrl } = useUrl();
  const [data, setData] = useState([]);
  const email = "admin@gmail.com";
  const password = "admin";
  const token = btoa(`${email}:${password}`); // base64 encode

  useEffect(() => {
    if (!baseUrl) return;
    axios
      .get(`${baseUrl}`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("Axios error:", err));
  }, [baseUrl, token]);

  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className={container}>
      <table className={mainTable}>
        <thead>
          <tr>
            {headers.map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((key) => (
                <td key={key}>
                  {Array.isArray(row[key])
                    ? row[key].map((item, i) => (
                        <span key={i} className="tag">
                          {item}
                        </span>
                      ))
                    : row[key]}
                </td>
              ))}
              <td>
                <div className={actions}>
                  <img src={Edit} alt="Edit" />
                  <img src={Delete} alt="Delete" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// <tbody>
//   {data.map((course, index) => (
//     <tr key={index}>
//       <td>{course.name}</td>
//       <td>{course.description}</td>
//       <td>
//         {course.tags.map((tag, i) => (
//           <span key={i} className="tag">
//             {tag}
//           </span>
//         ))}
//       </td>
//       <td>
//         <div className={actions}>
//           <img src={Edit} alt="Edit" />
//           <img src={Delete} alt="Delete" />
//         </div>
//       </td>
//     </tr>
//   ))}
// </tbody>;
