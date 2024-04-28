import React, { useEffect, useState } from "react";
import profileService from "../../../../services/profileService";
import { useToast } from "../../../../context/ToastContext";

function ManagerList() {
  const { toastData, hideToast, setToastData } = useToast();
  // Sample managers data
  const [managers, setManagers] = useState([]);

  // Function to handle delete button click
  const handleDelete = async (id) => {
    // This function can be implemented to handle delete actions
    console.log(`Delete kebele with ID: ${id}`);
    //diag
    const res = await profileService.delete(id);
    setToastData(res);
    if (res.success) {
      fetchData();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await profileService.getAllManager();
    console.log(res.data[0].email);
    setManagers(res.data);
  };

  return (
    <>
      <div className="">
        <h2 className="mb-4 pt-3 text-center text-lg font-bold text-cyan-800">
          Kebele List
        </h2>
        <table className=" table-bordered w-4/5 mx-auto">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((manager) => (
              <tr key={manager.id}>
                <td>{manager.id}</td>
                <td>{manager.email}</td>
                <td>{manager.phone}</td>
                <td className="w-40">
                  <button
                    onClick={() => handleDelete(manager.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ManagerList;
