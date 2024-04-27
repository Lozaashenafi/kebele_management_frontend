import React, { useEffect, useState } from "react";
import { Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../../../public/resource/images/img-01.png";
import authService from "../../../services/authService";
// import { useAuth } from "../../../context/authContext";
import { useToast } from "../../../context/ToastContext";

const { Content } = Layout;
const { Title } = Typography;

function Login() {
  const { toastData, hideToast, setToastData } = useToast();
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigater = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await authService.login(formData);
    console.log(res);
    setToastData(res);
    if (res.success) {
      // fetchData();
      // setIsLoggedIn(true);
      //check for role
      // if (isAdmin) {
      //   navigater("/admin/home");
      // } else if (isManager) {
      //   navigater("/manager/home");
      // } else {
      //   navigater("/secretary/home");
      // }
    }
  };
  // useEffect(() => {
  //   console.log(isLoggedIn);
  //   if (isAdmin) {
  //     navigater("/admin/home");
  //   } else if (isManager) {
  //     navigater("/manager/home");
  //   } else {
  //     navigater("/secretary/home");
  //   }
  // }, [isLoggedIn]);

  return (
    <div className="limiter">
      <div className=" backGround">
        <div className="wrap-login100 container1">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={LoginImage} alt="IMG" />
          </div>

          <div className="login100-form validate-form">
            <span className="login100-form-title"> Member Login </span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                aria-label="Email"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                aria-label="Password"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button
                className="login100-form-btn button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>

            <div className="text-center p-t-12">
              <span className="txt1"> Forgot </span>
              <a className="txt2" href="#">
                Username / Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
