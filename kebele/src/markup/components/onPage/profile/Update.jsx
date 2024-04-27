import profile from "../../../../assets/Image/user-4_2.jpg";

function Update() {
  return (
    <form className="w-9/12 ml-20 mt-5">
      <div className="row mb-3">
        <label className="col-md-4 col-lg-3 col-form-label">
          Profile Image
        </label>
        <div className="col-md-8 col-lg-9">
          <img src={profile} alt="Profile" />
          <div className="pt-2">
            <a
              href="#"
              className="btn btn-primary btn-sm"
              title="Upload new profile image"
            >
              <i className="bi bi-upload"></i>
            </a>
            <a
              href="#"
              className="btn btn-danger btn-sm"
              title="Remove my profile image"
            >
              <i className="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-md-4 col-lg-3 col-form-label">First Name</label>
        <div className="col-md-8 col-lg-9">
          <input
            name="firstName"
            type="text"
            className="form-control"
            id="firstName"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-md-4 col-lg-3 col-form-label">Middle Name</label>
        <div className="col-md-8 col-lg-9">
          <input
            name="middleName"
            type="text"
            className="form-control"
            id="middleName"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-md-4 col-lg-3 col-form-label">Last Name</label>
        <div className="col-md-8 col-lg-9">
          <input
            name="lastName"
            type="text"
            className="form-control"
            id="lastName"
          />
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-md-4 col-lg-3 col-form-label">Job</label>
        <div className="col-md-8 col-lg-9">
          <input name="job" type="text" className="form-control" id="Job" />
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-md-4 col-lg-3 col-form-label">Address</label>
        <div className="col-md-8 col-lg-9">
          <input
            name="address"
            type="text"
            className="form-control"
            id="Address"
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">
          Phone
        </label>
        <div className="col-md-8 col-lg-9">
          <input name="phone" type="text" className="form-control" id="Phone" />
        </div>
      </div>

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
          />
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default Update;
