import React, { useState } from "react";

function BirthRequest() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    motherFullName: "",
    houseNumber: "",
    idnumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await formService.BirthRequest(formData);
  };

  return (
    <div className="max-w-md mx-auto w-4/5 mt-2">
      <h1 className="text-3xl text-center font-medium font-serif">
        Birth Certificate Registration Form
      </h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">First Name:</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Middle Name:</label>
          <input
            type="text"
            name="middleName"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Last Name:</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Mother Name:</label>
          <input
            type="text"
            name="motherFullName"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">House Number:</label>
          <input
            type="text"
            name="houseNumber"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Id Number:</label>
          <input
            type="text"
            onChange={handleChange}
            name="idnumber"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BirthRequest;
