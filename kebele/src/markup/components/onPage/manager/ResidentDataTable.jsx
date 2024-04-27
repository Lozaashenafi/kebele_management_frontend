import React from "react";

const ResidentDataTable = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center text-3xl font-bold text-sky-800 font-serif mb-3">
        Resident Data
      </h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Home No</th>
            <th>ID Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>loza Ashenafi Wedneh</td>
            <td>Female</td>
            <td>23</td>
            <td>1188</td>
            <td>1793/14</td>
          </tr>
          {/* {residentData.map((resident, index) => (
            <tr key={index}>
              <td>{`${resident.firstName} ${resident.middleName} ${resident.lastName}`}</td>
              <td>{resident.gender}</td>
              <td>{resident.age}</td>
              <td>{resident.homeNo}</td>
              <td>{resident.idNumber}</td>
            </tr>
        
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default ResidentDataTable;
