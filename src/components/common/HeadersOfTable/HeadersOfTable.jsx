import { useState, useEffect } from "react";
import { useUrl } from "../../context/UrlContext";

const HeadersOfTable = () => {
  const { endPoint } = useUrl();

  const [columnsHeaderTable, setColumnsHeaderTable] = useState([]);

  useEffect(() => {
    if (endPoint === "/chapters") {
      setColumnsHeaderTable([
        "Name",
        "Description",
        "Creation Date",
        "Last Update",
        "Actions",
      ]);
    } else if (endPoint === "/assistants") {
      setColumnsHeaderTable(["Name", "Email", "Phone1", "Phone2", "Actions"]);
    } else {
      setColumnsHeaderTable([
        "Name",
        "Description",
        "Creation Date",
        "Last Update",
        "Actions",
      ]);
    }
  }, [endPoint]);

  return (
    <tr>
      {columnsHeaderTable.map((h) => (
        <td key={h}>{h}</td>
      ))}
    </tr>
  );
};
export default HeadersOfTable;
