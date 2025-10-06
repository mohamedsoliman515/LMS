import { Edit, Delete } from "../../../assets";
import { useEffect, useState } from "react";
import { useUrl } from "../../context/UrlContext";
import styles from "./styles.module.css";
import api from "../../../services/Axios-global-baseUrl";
import HeadersOfTable from "../HeadersOfTable/HeadersOfTable";
const { container, mainTable, actions } = styles;
import { useData } from "../../context/DataContext";
import EditModal from "../EditModal/EditModal";

export default function CourseTable() {
  const { endPoint } = useUrl();
  const { data, updateData, search } = useData();
  const [cloneData, setCloneData] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const getItemId = (item) =>
    item.course_id || item.chapter_id || item.assistant_id;
  const handleEdit = (id) => {
    const item = cloneData.find((el) => getItemId(el) === id);
    setSelectedItem(item);
    setOpenEditModal(true);
  };

  // Fetch data
  useEffect(() => {
    if (!endPoint) return;

    api
      .get(`${endPoint}`)
      .then((res) => {
        updateData(res.data);
        setCloneData(res.data); // initialize clone with original data
      })
      .catch((err) => console.error("Axios error:", err));
  }, [endPoint]);

  // Update cloneData when search changes
  useEffect(() => {
    if (!search.trim()) {
      setCloneData(data);
    } else {
      const filtered = data.filter(
        (item) =>
          item.course_name?.toLowerCase().includes(search.toLowerCase()) ||
          item.chapter_name?.toLowerCase().includes(search.toLowerCase()) ||
          item.assistant_name?.toLowerCase().includes(search.toLowerCase())
      );
      setCloneData(filtered);
    }
  }, [search, data]);
  //
  const handleDelete = async (id) => {
    try {
      // Call API to delete
      await api.delete(`${endPoint}/${id}`);

      // Update UI (remove deleted item from cloneData & data context)
      setCloneData((prev) => prev.filter((item) => getItemId(item) !== id));
      updateData((prev) => prev.filter((item) => getItemId(item) !== id));

      console.log(`Item with id ${id} deleted`);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className={container}>
      <table className={mainTable}>
        <thead>
          <HeadersOfTable />
        </thead>
        {/* make body in another component */}
        <tbody>
          {cloneData.length > 0 ? (
            cloneData.map((item) => (
              <tr key={getItemId(item)}>
                <td>
                  {item.course_name || item.chapter_name || item.assistant_name}
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
                    <img
                      src={Edit}
                      alt="Edit"
                      className="edit"
                      onClick={() => handleEdit(getItemId(item))}
                    />
                    <img
                      src={Delete}
                      alt="Delete"
                      onClick={() => handleDelete(getItemId(item))}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {openEditModal && (
        <EditModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          item={selectedItem}
          onUpdate={(updatedItem) => {
            setCloneData((prev) =>
              prev.map((row) =>
                getItemId(row) === getItemId(updatedItem) ? updatedItem : row
              )
            );
            updateData((prev) =>
              prev.map((row) =>
                getItemId(row) === getItemId(updatedItem) ? updatedItem : row
              )
            );
          }}
        />
      )}
    </div>
  );
}
