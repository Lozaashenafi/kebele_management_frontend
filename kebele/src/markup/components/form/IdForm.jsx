import { useState } from "react";
import formService from "../../../services/formService.js";

function IdForm() {
  const [page, setPage] = useState(1);
  // console.log(state);
  const [formDataPage1, setFormDataPage1] = useState({
    email: "",
    fullName: "",
    fatherFullName: "",
    motherFullName: "",
    birthDate: "",
  });

  const [formDataPage2, setFormDataPage2] = useState({
    gender: "",
    houseNumber: "",
    workStatus: "",
    nationality: "",
    houseLive: "",
    phone: "",
  });

  const handleChangePage1 = (e) => {
    const { name, value } = e.target;
    setFormDataPage1({
      ...formDataPage1,
      [name]: value,
    });
  };

  const handleChangePage2 = (e) => {
    const { name, value } = e.target;
    setFormDataPage2({
      ...formDataPage2,
      [name]: value,
    });
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Combine formDataPage1 and formDataPage2 to get all form data
    const formData = { ...formDataPage1, ...formDataPage2 };
    // Handle form submission here, you can send formData to backend or perform any other action
    console.log(formData);
    let res = await formService.idrequest(formData);
    console.log(res);
  };

  return (
    <div className="max-w-md mx-auto w-4/5 mt-14 mb-4">
      <h1 className="text-3xl text-center font-medium font-serif">
        ID Registration Form{" "}
      </h1>
      {page === 1 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">First Name:</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChangePage1}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Middle Name:</label>
            <input
              type="text"
              name="middleName"
              onChange={handleChangePage1}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Last Name:</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChangePage1}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              name="email"
              onChange={handleChangePage1}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Father Name:</label>
            <input
              type="text"
              name="fatherName"
              onChange={handleChangePage1}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Mother Name:</label>
            <input
              type="text"
              name="motherName"
              onChange={handleChangePage1}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Birth Date:</label>
            <input
              type="date"
              name="birthDate"
              onChange={handleChangePage1}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={nextPage}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </form>
      )}
      {page === 2 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Gender:</label>
            <select
              name="gender"
              onChange={handleChangePage2}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">House Number:</label>
            <input
              type="text"
              name="houseNumber"
              onChange={handleChangePage2}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Work Status:</label>
            <input
              type="text"
              name="workStatus"
              onChange={handleChangePage2}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Nationality:</label>
            <input
              type="text"
              name="nationality"
              onChange={handleChangePage2}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Phone Number:</label>
            <input
              type="text"
              name="phone"
              onChange={handleChangePage2}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">House Live:</label>
            <select
              name="houseLive"
              onChange={handleChangePage2}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select</option>
              <option value="owned">Owned</option>
              <option value="rented">Rented</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevPage}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default IdForm;
