import React, { useEffect, useState } from "react";
import residentService from "../../../../services/residentService";

const ResidentDataTable = () => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await residentService.getAll();
      setResidents(res.data);
    } catch (error) {
      console.error("Error fetching resident data:", error);
    }
  };

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
          {residents.map((resident, index) => (
            <tr key={index}>
              <td>{`${resident.firstName} ${resident.middleName} ${resident.lastName}`}</td>
              <td>{resident.gender}</td>
              <td>{resident.age}</td>
              <td>{resident.homeNo}</td>
              <td>{resident.idNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResidentDataTable;
