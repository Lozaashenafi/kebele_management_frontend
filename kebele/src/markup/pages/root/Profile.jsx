import Header from "../../components/custom/Header";
import profile from "../../../assets/Image/user-4_2.jpg";
import { useEffect, useState } from "react";
import About from "../../components/onPage/profile/About";
import Update from "../../components/onPage/profile/Update";
import ProfileNav from "../../components/onPage/profile/ProfileNav";
import ChangePassword from "../../components/onPage/profile/ChangePassword";
// import { useAuth } from "../../../context/authContext";
import { useToast } from "../../../context/ToastContext";
import { useNavigate } from "react-router-dom";
function Profile() {
  const [choice, setChoice] = useState(1);
  // const {
  //   isAdmin,
  //   isManager,
  //   ismenderMeri,
  //   userData,
  //   setUserData,
  //   isLoggedIn,
  //   setIsLoggedIn,
  //   fetchData,
  // } = useAuth();

  const navigater = useNavigate();
  const handleClick = (a) => {
    setChoice(a);
  };
  // useEffect(() => {
  //   console.log(isLoggedIn);
  //   if (!isLoggedIn) {
  //     navigater("/");
  //   }
  // }, [isLoggedIn]);

  return (
    <>
      <Header />
      {choice != 2 && (
        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
          <img src={profile} alt="Profile" className="rounded-circle" />
          <h2>Kevin Anderson</h2>
        </div>
      )}
      <ProfileNav choice={choice} handleClick={handleClick} />
      {choice === 1 && <About />}
      {choice === 2 && <Update />}
      {choice === 3 && <ChangePassword />}
    </>
  );
}

export default Profile;
