import React from "react";
import "../../../../../public/resource/css copy/style3.css";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";

function GenderStat() {
  return (
    <div className="container">
      <h1 className="mt-5 text-center">City Resident Statistics</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card statistics-card">
            <div className="card-body">
              <h5 className="card-title">Male Residents</h5>
              <ManIcon className="fas fa-male male-icon  m-3" />
              <p className="card-text">
                Number of male residents: <strong>500</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card statistics-card">
            <div className="card-body">
              <h5 className="card-title">Female Residents</h5>
              <WomanIcon className="fas fa-female female-icon  m-3" />
              <p className="card-text">
                Number of female residents: <strong>600</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenderStat;
