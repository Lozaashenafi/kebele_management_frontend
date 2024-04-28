import React from "react";
import RequestDetail from "./RequestDetail";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import formService from "../../../../services/formService";
function IdRequestTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const [idrequests, setIdrequests] = useState([]);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = idrequests.slice(firstIndex, lastIndex);
  const npage = Math.ceil(idrequests.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const [modalShow, setModalShow] = React.useState(false);
  const [fullData, setFullData] = useState({});
  const [idrq, setIdrq] = useState({});
  const [state, setState] = useState("");
  function nextPage(e) {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCpage(id) {
    setCurrentPage(id);
  }
  const handlePopup = (data) => {
    setModalShow(true);
    // console.log(data);

    idrq.map((resident, i) => {
      if (resident.id === data.id) {
        // console.log(resident);
        setFullData(resident);
        setState("id");
      }
    });
  };

  useEffect(() => {
    setFullData({});
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await formService.getidrequest();
      const response1 = res.data;
      setIdrq(response1);
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
          ID Request List
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
            {records.map((record, i) => (
              <tr onClick={() => handlePopup(record)} key={i}>
                <td>{record.id}</td>
                <td>{record.fullName}</td>
                <td>{record.phone}</td>
                <td>{record.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  prePage();
                }}
              >
                prev
              </button>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <button
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    changeCpage(n);
                  }}
                >
                  {n}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  nextPage();
                }}
              >
                next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <RequestDetail
        state={state}
        fullData={fullData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default IdRequestTable;
