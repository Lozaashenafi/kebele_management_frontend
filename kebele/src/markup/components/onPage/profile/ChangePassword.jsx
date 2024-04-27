import React, { useState } from "react";
import axios from "axios";

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear any previous validation error when input changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if new password and confirm password match
    if (formData.newPassword !== formData.confirm) {
      setError("New password and confirm password must match");
      return;
    }

    try {
      // Send request to backend
      const response = await axios.post("/api/change-password", formData);
      // Handle success response
      console.log("Password change successful:", response.data);
    } catch (error) {
      // Handle error response
      console.error("Password change failed:", error.response.data);
    }
  };

  return (
    <form className="w-9/12 ml-20 mt-5" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label className="col-md-4 col-lg-3 col-form-label">
          Current Password
        </label>
        <div className="col-md-8 col-lg-9">
          <input
            name="currentPassword"
            type="password"
            className="form-control"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-md-4 col-lg-3 col-form-label">New Password</label>
        <div className="col-md-8 col-lg-9">
          <input
            name="newPassword"
            type="password"
            className="form-control"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-md-4 col-lg-3 col-form-label">
          Confirm Password
        </label>
        <div className="col-md-8 col-lg-9">
          <input
            name="confirm"
            type="password"
            className="form-control"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      {error && <div className="text-danger">{error}</div>}
      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Save Change
        </button>
      </div>
    </form>
  );
}

export default ChangePassword;
