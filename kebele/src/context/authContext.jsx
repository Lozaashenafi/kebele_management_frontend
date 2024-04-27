import { useState, useEffect, useContext, createContext } from "react";
import getAuth from "../util/authHeader";
// create auth context
const AuthContext = createContext();

// prepare auth provider
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isManager, setisManager] = useState(false);
  const [ismenderMeri, setIsmenderMeri] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userData);
  const fetchData = async () => {
    try {
      const loggedInUser = await getAuth();
      if (loggedInUser.token) {
        setIsLoggedIn(true);
        if (loggedInUser.role === "ADMIN") {
          setIsAdmin(true);
        } else if (loggedInUser.role === "MANAGER") {
          setisManager(true);
        } else if (loggedInUser.role === "SECRATERY") {
          setIsmenderMeri(true);
        }
        const { id, firstName, role, token } = loggedInUser;
        setUserData({
          id,
          firstName,
          role,
          token,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    isAdmin,
    isManager,
    ismenderMeri,
    userData,
    setUserData,
    fetchData,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// useAuth
export const useAuth = () => {
  return useContext(AuthContext);
};
