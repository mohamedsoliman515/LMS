import { Edit, Delete } from "../../../assets";
import { useEffect } from "react";
import { useUrl } from "../../context/UrlContext";
import styles from "./styles.module.css";
import api from "../../../services/Axios-global-baseUrl";
import HeadersOfTable from "../../../Hooks/HeadersOfTable";
const { container, mainTable, actions } = styles;
import { useData } from "../../context/DataContext";
export default function CourseTable() {
  const { endPoint } = useUrl();
  const { data, updateData, search } = useData();

  useEffect(() => {
    if (!endPoint) return;

    api
      .get(`${endPoint}`)
      .then((res) => {
        updateData(res.data);
      })
      .catch((err) => console.error("Axios error:", err));
  }, [endPoint]);

  return (
    <div className={container}>
      <table className={mainTable}>
        <thead>
          <HeadersOfTable />
        </thead>

        <tbody>
          {data.length > 0 ? (
            data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.course_name
                      ?.toLowerCase()
                      .includes(search.toLowerCase()) ||
                      item.chapter_name
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.assistant_name
                        ?.toLowerCase()
                        .includes(search.toLowerCase());
              })
              .map((item, index) => {
                return (
                  <tr key={item.id ?? index}>
                    <td>
                      {item.course_name ||
                        item.chapter_name ||
                        item.assistant_name}
                    </td>
                    <td>
                      {item.course_description ||
                        item.chapter_description ||
                        item.assistant_email}
                    </td>
                    <td>{item.creation_date || item.assistant_phone1}</td>
                    <td>{item.last_update || item.assistant_phone2}</td>
                    <td>
                      <div className={actions}>
                        <img src={Edit} alt="Edit" className="edit" />
                        <img src={Delete} alt="Delete" />
                      </div>
                    </td>
                  </tr>
                );
              })
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
