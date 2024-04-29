import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import formService from "../../../../services/formService";
function ManagerAprovedTable() {
  const [idrequests, setIdrequests] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await formService.getapprovedidrequest();
      const response1 = res.data;
      setIdrequests(
        response1.map((request, i) => ({
          id: request.id,
          fullName: request.fullName,
          phone: request.phone,
          email: request.email,
        }))
      );

      //   console.log(birthrequests);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-sky-800 font-serif ml-8 mt-5   mb-4">
          Given Ids
        </h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {idrequests.map((record, i) => (
              <tr onClick={() => handlePopup(record)} key={i}>
                <td>{record.id}</td>
                <td>{record.fullName}</td>
                <td>{record.phone}</td>
                <td>{record.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ManagerAprovedTable;
