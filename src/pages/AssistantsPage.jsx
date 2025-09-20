import { useEffect } from "react";
import Table from "../components/common/Table/Table";
import { useUrl } from "../components/context/UrlContext";

const AssistantsPage = () => {
  const { updateEndPoint } = useUrl();
  useEffect(() => {
    updateEndPoint("http://localhost:9090/anchor-frost/assistants");
  }, []);
  return (
    <div>
      <Table />
    </div>
  );
};

export default AssistantsPage;
