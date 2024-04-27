function ProfileNav({ choice, handleClick }) {
  return (
    <ul className="nav nav-tabs nav-tabs-bordered" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${choice === 1 ? "active" : ""} `}
          data-bs-toggle="tab"
          data-bs-target="#profile-overview"
          aria-selected="true"
          role="tab"
          onClick={() => handleClick(1)}
        >
          Overview
        </button>
      </li>

      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${choice === 2 ? "active" : ""} `}
          data-bs-toggle="tab"
          data-bs-target="#profile-edit"
          aria-selected="false"
          role="tab"
          onClick={() => handleClick(2)}
        >
          Edit Profile
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${choice === 3 ? "active" : ""} `}
          data-bs-toggle="tab"
          data-bs-target="#profile-overview"
          aria-selected="true"
          role="tab"
          onClick={() => handleClick(3)}
        >
          Change Password
        </button>
      </li>
    </ul>
  );
}

export default ProfileNav;
