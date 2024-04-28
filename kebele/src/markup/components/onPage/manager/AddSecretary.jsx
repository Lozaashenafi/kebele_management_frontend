import React, { useState } from "react";
import profileService from "../../../../services/profileService.js";
import { useToast } from "../../../../context/ToastContext";

function AddSecretary({ fetchData }) {
  const { toastData, hideToast, setToastData } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    role: "SECRATERY",
    phone: "",
    email: "",
    gender: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.gender ||
      !formData.password
    ) {
      message.error("Please fill in all required fields.");
      return;
    }
    // Handle form submission here
    const res = await profileService.register(formData);
    console.log(res);
    fetchData();
    setToastData(res);
    if (res.success) {
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        email: "",
        gender: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="flex gap-10 ml-20">
        <div className="w-3/6">
          <h2 className="mb-4 text-center pt-3 text-lg font-bold text-cyan-800">
            Add Secretart
          </h2>

          <div className="row mb-3">
            <label className="col-md-4 col-lg-3 col-form-label">
              First Name
            </label>
            <div className="col-md-8 col-lg-9">
              <input
                name="firstName"
                type="text"
                className="form-control"
                id="firstName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-md-4 col-lg-3 col-form-label">
              Middle Name
            </label>
            <div className="col-md-8 col-lg-9">
              <input
                name="middleName"
                type="text"
                className="form-control"
                id="middleName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-md-4 col-lg-3 col-form-label">
              Last Name
            </label>
            <div className="col-md-8 col-lg-9">
              <input
                name="lastName"
                type="text"
                className="form-control"
                id="lastName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">
              Phone
            </label>
            <div className="col-md-8 col-lg-9">
              <input
                name="phone"
                type="text"
                className="form-control"
                id="Phone"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="row mb-3">
            <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">
              Email
            </label>
            <div className="col-md-8 col-lg-9">
              <input
                name="email"
                type="email"
                className="form-control"
                id="Email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-md-4 col-lg-3 col-form-label">gender</label>
            <div className="col-md-8 col-lg-9">
              <input
                name="gender"
                type="text"
                className="form-control"
                id="gender"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-md-4 col-lg-3 col-form-label">Password</label>
            <div className="col-md-8 col-lg-9">
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddSecretary;
