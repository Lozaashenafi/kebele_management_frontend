/* eslint-disable no-unused-vars */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import formService from "../../../../services/formService";
import { useToast } from "../../../../context/ToastContext";

function RequestDetail(props) {
  const { toastData, hideToast, setToastData } = useToast();
  // console.log(props.fullData);
  const handleApprove = async (data) => {
    const res = await formService.approve(data);
    setToastData(res);
  };
  // console.log(props.data);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="font-serif" id="contained-modal-title-vcenter">
          Id Request
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="font-serif">
          {props.state == "id" ? (
            <Row className="relative">
              <Col>
                <div className="mb-1 ">
                  <label className="font-serif">Name: </label>
                  <span>{props.fullData.fullName}</span>
                </div>
                <div className="mb-1 ">
                  <label htmlFor="">Father Name: </label>
                  <span>{props.fullData.fatherName}</span>
                </div>
                <div className="mb-1 ">
                  <label htmlFor="">Mother Name: </label>
                  <span>{props.fullData.motherName}</span>
                </div>
                {props.fullData.gender === "FEMALE" ? (
                  <>
                    <WomanIcon />
                    <span>Woman</span>
                  </>
                ) : (
                  <>
                    <ManIcon />
                    <span>Male</span>
                  </>
                )}
                <div className="mb-1 ">
                  <label htmlFor="">Email:</label>
                  <a href="mailto:lozaashenafi@gmail.com">
                    {props.fullData.email}
                  </a>
                </div>
              </Col>
              <Col>
                <div className="mb-1 ">
                  <label htmlFor="">BirthDay: </label>
                  <span>{props.fullData.birthDate}</span>
                </div>
                <div className="mb-1 ">
                  <label htmlFor="">House No: </label>
                  <span>{props.fullData.houseNumber}</span>
                </div>
                <div className="mb-1 ">
                  <label htmlFor="">House live: </label>
                  <span>{props.fullData.houseLive}</span>
                </div>
                <p>{props.fullData.workStatus}</p>
                <p>{props.fullData.nationality}</p>
                <button
                  onClick={() => handleApprove(props.fullData)}
                  className=" bg-sky-800 p-2 text-white rounded-md   "
                  href=""
                >
                  Approve
                </button>
              </Col>
            </Row>
          ) : (
            <Row className="relative">
              <Col>
                <div className="mb-1 ">
                  <label className="font-serif">Name: </label>
                  <span>{`${props.fullData.firstName} ${props.fullData.middleName} ${props.fullData.lastName} `}</span>
                </div>
                <div className="mb-1 ">
                  <label htmlFor="">Mother Name: </label>
                  <span>{props.fullData.motherName}</span>
                </div>
                <div className="mb-1 ">
                  <label htmlFor="">Father Name: </label>
                  <span>{` ${props.fullData.middleName} ${props.fullData.lastName} `}</span>
                </div>
                {props.fullData.gender === "FEMALE" ? (
                  <>
                    <WomanIcon />
                    <span>Woman</span>
                  </>
                ) : (
                  <>
                    <ManIcon />
                    <span>Male</span>
                  </>
                )}
                <div className="mb-1 ">
                  <label htmlFor="">Email:</label>
                  <a href="mailto:lozaashenafi@gmail.com">
                    {props.fullData.email}
                  </a>
                </div>
                <div className="mb-1 ">
                  <label htmlFor=""> Id Number: </label>
                  <span>{props.fullData.idnumber}</span>
                </div>
              </Col>
              <Col>
                <button
                  onClick={() => handleApprove(props.fullData)}
                  className=" bg-sky-800 p-2 text-white rounded-md   "
                  href=""
                >
                  Approve
                </button>
              </Col>
            </Row>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="border rounded-md  p-2 hover:bg-sky-800 hover:text-white hover:translate-x-0"
          onClick={props.onHide}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default RequestDetail;
