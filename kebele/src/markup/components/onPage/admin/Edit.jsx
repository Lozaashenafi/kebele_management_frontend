import React, { useState } from "react";
import kebeleServer from "../../../../services/kebeleServer";
import { useToast } from "../../../../context/ToastContext";

function Edit({ editKebele }) {
  const { toastData, hideToast, setToastData } = useToast();
  const [formData, setFormData] = useState({
    id: editKebele.id,
    name: editKebele.name,
    city: editKebele.address.city,
    region: editKebele.address.region,
    wereda: editKebele.address.wereda,
    zone: editKebele.address.zone,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hey");
    // Check if any of the form fields have changed
    const isChanged = Object.keys(formData).some(
      (key) => formData[key] !== editKebele.address[key]
    );
    // If no changes made, return without submitting
    if (!isChanged) return;
    const res = await kebeleServer.update(formData);
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

  const renderPlaceholderValue = (fieldName) => {
    // Check if form data matches the placeholder value
    if (formData[fieldName] === "") {
      return editKebele.address[fieldName];
    }
    return formData[fieldName];
  };

  return (
    <div>
      <h2 className="mb-4 text-center pt-3 text-lg font-bold text-cyan-800">
        update Kebele
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
                  placeholder={editKebele.name}
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
                  <option value="">{renderPlaceholderValue("city")}</option>
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
                  <option value="">{renderPlaceholderValue("region")}</option>
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
                  <option value="">{renderPlaceholderValue("wereda")}</option>
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
                  <option value="">{renderPlaceholderValue("zone")}</option>
                  {zones.map((zone) => (
                    <option key={zone} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Edit;
