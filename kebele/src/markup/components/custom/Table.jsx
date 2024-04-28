import RequestDetail from "./RequestDetail";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import formService from "../../../services/formService";
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
  const [idrequests, setIdrequests] = useState([]);
  const [birthrequests, setBirthrequests] = useState([]);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = idrequests.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState({});
  const [fullData, setFullData] = useState({});
  const [idrq, setIdrq] = useState({});
  const [bdrq, setBdrq] = useState({});
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

    idrq.map((resident, id) => {
      if (resident.id === data.id) {
        // console.log(resident);
        setFullData(resident);
      }
    });
    // console.log(fullData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await formService.getidrequest();
      const res2 = await formService.getbirthrequests();
      const response1 = res.data;
      const response2 = res2.data;
      setBdrq(response2);
      setIdrq(response1);
      setIdrequests(
        response1.map((request, i) => ({
          id: request.id, // Fix here: Use request.id instead of response.id
          fullName: request.fullName, // Fix here: Use request.fullName instead of response.fullName
          phone: request.phone, // Fix here: Use request.phone instead of response.phone
          email: request.email, // Fix here: Use request.email instead of response.email
        }))
      );
      setBirthrequests(
        response2.map((request, i) => ({
          id: request.id, // Fix here: Use request.id instead of response.id
          firstName: request.firstName, // Fix here: Use request.fullName instead of response.fullName
          idNumber: request.idNumber, // Fix here: Use request.phone instead of response.phone
          email: request.email, // Fix here: Use request.email instead of response.email
        }))
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
                  <th>ID</th>
                  <th>First Name</th>
                  <th>ID Number</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {birthrequests.map((d, i) => (
                  <tr onClick={() => handlePopup(d)} key={i}>
                    <td>{d.id}</td>
                    <td>{d.firstName}</td>
                    <td>{d.idNumber}</td>
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

        <RequestDetail
          fullData={fullData}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}
