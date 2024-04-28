import React, { useState } from "react";
import { useToast } from "../../../../context/ToastContext";
import residentService from "../../../../services/residentService";

const ResidentForm = () => {
  // State to manage form data
  const { toastData, hideToast, setToastData } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    age: 0,
    homeNo: 0,
    idNumber: 0,
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to your backend or perform any other actions
    // console.log(formData);
    // Reset form fields after submission
    const res = residentService.register(formData);
    setToastData(res);
    // setFormData({
    //   firstName: "",
    //   middleName: "",
    //   lastName: "",
    //   gender: "",
    //   age: "",
    //   homeNo: "",
    //   idNumber: "",
    // });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container w-3/4">
      <h2 className="mt-5 mb-4 text-center text-3xl font-bold text-sky-800 font-serif">
        New Resident Information Form
      </h2>
      <form>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="middleName" className="form-label">
              Middle Name:
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Gender:</label>
            <div className="form-check">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="male" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="female" className="form-check-label">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="homeNo" className="form-label">
              Home No:
            </label>
            <textarea
              id="homeNo"
              name="homeNo"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="idNumber" className="form-label">
              ID Number:
            </label>
            <textarea
              id="idNumber"
              name="idNumber"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            onChange={handleChange}
            className="form-check-input"
            required
          />
          <label htmlFor="consent" className="form-check-label">
            I didnt
          </label>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResidentForm;
