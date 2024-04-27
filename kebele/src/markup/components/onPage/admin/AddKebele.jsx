import React, { useState } from "react";
import kebeleServer from "../../../../services/kebeleServer.js";
import { useToast } from "../../../../context/ToastContext";

function AddKebele() {
  const { toastData, hideToast, setToastData } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    region: "",
    wereda: "",
    zone: "",
  });

  const cities = [
    "Baherdar",
    "Addis Ababa",
    "Hawassa",
    "Jimma",
    "Adama",
    "Shashemene",
  ];
  const wereda = ["limuseqa", "LimiKosa", "shebesombo", "dedo"];
  const regions = [
    "Amhara",
    "Oromia",
    "Tigray",
    "Somali",
    "Sidama",
    "Afar",
    "Benishangul",
  ];
  const zones = ["Arsi", "Jimma", "Gujii", "Ilubabur"];
  // You can define wereda options similarly

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await kebeleServer.register(formData);
    setToastData(res);
    if (res.success) {
      setFormData({
        name: "",
        city: "",
        region: "",
        wereda: "",
        zone: "",
      });
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-center pt-3 text-lg font-bold text-cyan-800">
        Add Kebele
      </h2>
      <form onSubmit={handleSubmit}>
        <table className="border mx-auto m">
          <thead className="mb-2">
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Region</th>
              <th>Wereda</th>
              <th>Zone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter kebele name"
                  required
                />
              </td>
              <td>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select Region</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  name="wereda"
                  value={formData.wereda}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select Region</option>
                  {wereda.map((wereda) => (
                    <option key={wereda} value={wereda}>
                      {wereda}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  name="zone"
                  value={formData.zone}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select Zone</option>
                  {zones.map((zone) => (
                    <option key={zone} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default AddKebele;
