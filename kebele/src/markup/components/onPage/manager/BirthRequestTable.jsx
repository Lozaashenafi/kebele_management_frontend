import React from "react";
import RequestDetail from "./RequestDetail";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import formService from "../../../../services/formService";
function BirthRequestTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const [birthrequests, setBirthrequests] = useState([]);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = birthrequests.slice(firstIndex, lastIndex);
  const npage = Math.ceil(birthrequests.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const [modalShow, setModalShow] = React.useState(false);
  const [fullData, setFullData] = useState({});
  const [bdrq, setBdrq] = useState({});
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

    bdrq.map((resident, i) => {
      if (resident.id === data.id) {
        // console.log(resident);
        setFullData(resident);
        // console.log(fullData);
        setState("birth");
      }
    });
    // console.log(fullData);
  };

  useEffect(() => {
    setFullData({});
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await formService.getbirthrequests();
      const response = res.data;
      setBdrq(response);
      setBirthrequests(
        response.map((request, i) => ({
          id: request.id,
          firstName: request.firstName,
          idnumber: request.idnumber,
          email: request.email,
        }))
      );
      console.log(birthrequests);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-sky-800 font-serif ml-8 mt-5   mb-4">
          Birth Certeficate Requesta
        </h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>ID Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr onClick={() => handlePopup(d)} key={i}>
                <td>{d.id}</td>
                <td>{d.firstName}</td>
                <td>{d.idnumber}</td>
                <td>{d.email}</td>
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

export default BirthRequestTable;
