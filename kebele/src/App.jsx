import {
  BrowserRouter,
  Route,
  Outlet,
  Routes,
  useRoutes,
} from "react-router-dom";
import Forms from "./markup/pages/Forms";
import Profile from "./markup/pages/root/Profile";
import Login from "./markup/pages/root/Login";
import Home from "./markup/pages/user/secretary/Home";
import "./App.css";
import "../src/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/vendor/boxicons/css/boxicons.min.css";
import "../src/assets/vendor/quill/quill.snow.css";
import "../src/assets/vendor/quill/quill.bubble.css";
import "../src/assets/vendor/remixicon/remixicon.css";
import "../src/assets/vendor/simple-datatables/style.css";
import Welcome from "./markup/pages/root/Welcome";
import HomeM from "./markup/pages/user/manager/HomeM";
import HomeA from "./markup/pages/user/admin/HomeA";
import Id from "./markup/pages/Id";
import HomeN from "./markup/pages/HomeN";
import BirthCertificate from "./markup/pages/BirthCertificate";
import ToastNotification from "./markup/components/Toast";

const App = () => {
  return (
    <>
      <ToastNotification />
      <Routes>
        <Route path="/form" element={<Forms />} />
        <Route path="/" element={<HomeN />} />
        <Route path="/secretary/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Welcome />} />
        <Route path="/manager/home" element={<HomeM />} />
        <Route path="/admin/home" element={<HomeA />} />
        <Route path="/id" element={<Id />} />
        <Route path="/birthcertificate" element={<BirthCertificate />} />
      </Routes>
    </>
  );
};

export default App;
