import React, { useEffect, useState } from "react";
import kebeleServer from "../../../../services/kebeleServer";
import { useToast } from "../../../../context/ToastContext";
import Edit from "./Edit";

function KebeleList() {
  const { toastData, hideToast, setToastData } = useToast();
  // Sample kebele data
  const [kebeles, setKebeles] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [editKebele, setEditKebele] = useState();

  // Function to handle edit button click
  const handleEdit = (kebele) => {
    // This function can be implemented to handle edit actions
    console.log(`Edit kebele with ID: ${kebele.id}`);
    setModalShow(true);
    setEditKebele(kebele);
  };

  // Function to handle delete button click
  const handleDelete = async (id) => {
    // This function can be implemented to handle delete actions
    console.log(`Delete kebele with ID: ${id}`);
    //diag
    const res = await kebeleServer.delete(id);
    setToastData(res);
    if (res.success) {
      fetchData();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await kebeleServer.getAll();
    setKebeles(res.data);
  };

  return (
    <>
      {modalShow ? (
        <Edit editKebele={editKebele} />
      ) : (
        <div className="">
          <h2 className="mb-4 pt-3 text-center text-lg font-bold text-cyan-800">
            Kebele List
          </h2>
          <table className=" table-bordered w-4/5 mx-auto">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {kebeles.map((kebele) => (
                <tr key={kebele.id}>
                  <td>{kebele.id}</td>
                  <td>{kebele.name}</td>
                  <td>{`${kebele.address.region} - ${kebele.address.city}`}</td>
                  <td className="w-40">
                    <button
                      onClick={() => handleEdit(kebele)}
                      className="btn btn-primary me-2"
                    >
                      {/* pass data row(kebele) */}
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(kebele.id)}
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
      )}
    </>
  );
}

export default KebeleList;
