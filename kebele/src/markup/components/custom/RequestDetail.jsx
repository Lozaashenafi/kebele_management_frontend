/* eslint-disable no-unused-vars */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import DoneAllIcon from "@mui/icons-material/DoneAll";

function RequestDetail(props) {
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
          <Row className="relative">
            <Col>
              <div className="mb-1 ">
                <label className="font-serif">Name: </label>
                <span> Loza Ashenafi</span>
              </div>
              <div className="mb-1 ">
                <label htmlFor="">Father Name: </label>
                <span> Ashenafi Wudneh</span>
              </div>
              <div className="mb-1 ">
                <label htmlFor="">Mother Name: </label>
                <span>Konjit Daniel</span>
              </div>
              <WomanIcon />
              <span>Woman</span>
              <div className="mb-1 ">
                <label htmlFor="">Email:</label>
                <a href="mailto:lozaashenafi@gmail.com">
                  lozaashenafi@gmail.com
                </a>
              </div>
              <div className="mb-1 ">
                <label htmlFor="">BirthDay: </label>
                <span> 01/02/1995</span>
              </div>
              <div className="mb-1 ">
                <label htmlFor="">House No: </label>
                <span> 1314</span>
              </div>
              <div className="mb-1 ">
                <label htmlFor="">House live: </label>
                <span> Owner</span>
              </div>
              <p>Worker</p>
              <p>Ethiopian</p>
            </Col>
            <Col className="absolute top-2 left-80">
              <div>
                <DoneAllIcon />
                <span className=" ml-2 text-lg     text-lime-600">
                  Mender Merei
                </span>
              </div>
              <div>
                <DoneAllIcon />
                <span className=" ml-2  text-lg text-lime-600">Manager</span>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <button
          className=" bg-sky-800 p-2 text-white rounded-md   "
          href="lozaashenafi@gmail.com"
        >
          Send Email
        </button>
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
