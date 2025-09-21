import { useState, useEffect } from "react";
import { useUrl } from "../components/context/UrlContext";

const HeadersOfTable = () => {
  const { endPoint } = useUrl();

  const [columnsHeaderTable, setColumnsHeaderTable] = useState([
    "id",
    "name",
    "description",
  ]);

  useEffect(() => {
    if (endPoint === "/chapters") {
      setColumnsHeaderTable(["chapterId", "chapterName", "lessonCount"]);
    } else if (endPoint === "/assistants") {
      setColumnsHeaderTable(["assistantId", "assistantName", "role"]);
    } else {
      setColumnsHeaderTable(["CoursesId", "name", "description"]);
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
