import RequestDetail from "./RequestDetail";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
const Data = [
  {
    No: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  },
  {
    No: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
  },
  {
    No: "3",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
  },
  {
    No: "4",
    firstName: "Emily",
    lastName: "Brown",
    email: "emily.brown@example.com",
  },
  {
    No: "5",
    firstName: "David",
    lastName: "Jones",
    email: "david.jones@example.com",
  },
  {
    No: "6",
    firstName: "Sarah",
    lastName: "Wilson",
    email: "sarah.wilson@example.com",
  },
];
export default function Tables({ active }) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const [modalShow, setModalShow] = React.useState(false);
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
  return (
    <>
      <div>
        {active === "" && (
          <div>
            <h2 className="text-3xl font-bold text-sky-800 font-serif ml-8 mt-5   mb-4">
              ID Request List
            </h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {records.map((d, i) => (
                  <tr onClick={() => setModalShow(true)} key={i}>
                    <td>{d.No}</td>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
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
        )}
        {active === "Manager Approved" && (
          <div>
            <h2 className="text-3xl font-bold text-sky-800 font-serif ml-8 mt-5   mb-4">
              Approved By The Manager
            </h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((d, i) => (
                  <tr onClick={() => setModalShow(true)} key={i}>
                    <td>{d.No}</td>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        {active === "Mendermeri Approved" && (
          <div>
            <h2 className="text-3xl font-bold text-sky-800 font-serif ml-8 mt-5   mb-4">
              Approved By The Mendermeri
            </h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((d, i) => (
                  <tr onClick={() => setModalShow(true)} key={i}>
                    <td>{d.No}</td>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        {active === "Given" && (
          <div>
            <h2 className="text-3xl font-bold text-sky-800 font-serif ml-8 mt-5   mb-4">
              GIVEN
            </h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((d, i) => (
                  <tr onClick={() => setModalShow(true)} key={i}>
                    <td>{d.No}</td>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        {active === "BDC" && (
          <div>
            <h2 className="text-3xl font-bold text-sky-800 font-serif ml-8 mt-5   mb-4">
              Birth Certeficate Requesta
            </h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((d, i) => (
                  <tr onClick={() => setModalShow(true)} key={i}>
                    <td>{d.No}</td>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        {active === "DDC" && (
          <div>
            <h2 className="text-3xl font-bold text-sky-800 font-serif ml-8 mt-5   mb-4">
              Daith Certificate Requests
            </h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((d, i) => (
                  <tr onClick={() => setModalShow(true)} key={i}>
                    <td>{d.No}</td>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}

        <RequestDetail show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
}
