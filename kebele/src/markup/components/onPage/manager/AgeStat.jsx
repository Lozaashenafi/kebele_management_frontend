import React from "react";
import "../../../../../public/resource/css copy/style4.css";

function AgeStat() {
  return (
    <div className="container">
      <h1 className="mt-5 text-center">City Resident Age Statistics</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card statistics-card">
            <div className="card-body">
              <h5 className="card-title">Age 0-20</h5>
              <i className="fas fa-baby age-icon"></i>
              <p className="card-text">
                Number of residents: <strong>250</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card statistics-card">
            <div className="card-body">
              <h5 className="card-title">Age 21-40</h5>
              <i className="fas fa-user age-icon"></i>
              <p className="card-text">
                Number of residents: <strong>400</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card statistics-card">
            <div className="card-body">
              <h5 className="card-title">Age 41-60</h5>
              <i className="fas fa-user-tie age-icon"></i>
              <p className="card-text">
                Number of residents: <strong>300</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgeStat;
