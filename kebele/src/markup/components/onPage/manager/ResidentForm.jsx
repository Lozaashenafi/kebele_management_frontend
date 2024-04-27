import React, { useState } from "react";

const ResidentForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    age: "",
    homeNo: "",
    idNumber: "",
    consent: false,
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to your backend or perform any other actions
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      age: "",
      homeNo: "",
      idNumber: "",
      consent: false,
    });
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
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
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
              value={formData.middleName}
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
              value={formData.lastName}
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
                checked={formData.gender === "male"}
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
                checked={formData.gender === "female"}
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
              value={formData.age}
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
              value={formData.homeNo}
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
              value={formData.idNumber}
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
            checked={formData.consent}
            onChange={handleChange}
            className="form-check-input"
            required
          />
          <label htmlFor="consent" className="form-check-label">
            I didnt
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResidentForm;
