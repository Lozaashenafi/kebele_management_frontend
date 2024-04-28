import telegram from "../../../assets/Image/telegram.png";
import instagram from "../../../assets/Image/instagram.png";
import facebook from "../../../assets/Image/facebook.png";
import "./contactUs.css";
const ContactUs = () => {
  return (
    <div className="container-xxl ">
      <div className="container">
        <div
          className="contactUsTitel text-center wow fadeInUp mb-30px"
          data-wow-delay="0.1s"
        >
          <h6 className="bg-white p-2 text-lg text-center text-teal-600 px-3">
            Contact Us
          </h6>
          <h1 className="mb-5">Contact For Any Question</h1>
        </div>
        <div className="row g-4">
          <GetInTouch />
          <div
            className="col-lg-6 col-md-12 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

function GetInTouch() {
  return (
    <div
      className="col-lg-6 col-md-6 wow fadeInUp font-serif"
      data-wow-delay="0.1s"
    >
      <h5>Get In Touch</h5>
      <p className="mb-4">Empowering Voices, Strengthening Communities</p>
      <div className="d-flex align-items-center mb-4">
        <div className="ms-3">
          <h5 className="text-teal-600 ">Mobile</h5>
          <p className="mb-0">+012 345 67890</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="ms-3">
          <h5 className="text-teal-600 ">Email</h5>
          <p className="mb-0">mentinakebele@gmail.com</p>
        </div>
      </div>
      <div className="socialMedia">
        <div className="instagram contact">
          <a href="">
            <img
              className="img"
              width="30"
              height="30"
              src={instagram}
              alt=""
            />
          </a>
        </div>
        <div className="faceBook contact">
          <a href="">
            <img className="img" width="30" height="30" src={facebook} alt="" />
          </a>
        </div>
        <div className="telegram contact">
          <a href="">
            <img className="img" width="30" height="30" src={telegram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
function Form() {
  return (
    <form className="form">
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
            />
            <label>Your Name</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
            />
            <label>Your Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
            />
            <label>Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a message here"
              id="message"
            ></textarea>
            <label>Message</label>
          </div>
        </div>
        <div className="col-12">
          <button
            className="btn bg-cyan-600 text-white w-100 py-3"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactUs;
