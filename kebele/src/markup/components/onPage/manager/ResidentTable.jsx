import React from "react";
import "../../../../../public/resource/css copy/style4.css";
import ResidentForm from "./ResidentForm";
import ResidentDataTable from "./ResidentDataTable";

function ResidentTable() {
  return (
    <div className="bodyTable">
      <ResidentForm />
      <ResidentDataTable />
    </div>
  );
}

export default ResidentTable;
