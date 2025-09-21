import { Edit, Delete } from "../../../assets";
import { useEffect, useState } from "react";
// import axios from "axios";
import { useUrl } from "../../context/UrlContext";
import styles from "./styles.module.css";
import api from "../../../services/Axios-global-baseUrl";
import HeadersOfTable from "../../../Hooks/HeadersOfTable";
export default function CourseTable() {
  const { container, mainTable, actions } = styles;

  const { endPoint } = useUrl();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!endPoint) return;

    api
      .get(`${endPoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("Axios error:", err));
  }, [endPoint]);

  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className={container}>
      <table className={mainTable}>
        <thead>
          <HeadersOfTable />
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
