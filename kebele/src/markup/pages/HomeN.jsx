import React, { useReducer } from "react";
import Header from "../components/onPage/home/Header";
import News from "../components/onPage/home/News";
import Forms from "../pages/Forms";
import ContactUs from "./contactUs/ContactUs";
import Login from "./root/Login";

// Define action types
const actionTypes = {
  SET_ACTIVE_PAGE: "SET_ACTIVE_PAGE",
};

// Define initial state
const initialState = {
  activePage: "news", // Initially set to "news" page
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};

function Home() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to handle navigation
  const navigateToPage = (page) => {
    dispatch({ type: actionTypes.SET_ACTIVE_PAGE, payload: page });
  };

  // Render components based on active page
  const renderActivePage = () => {
    switch (state.activePage) {
      case "news":
        return <News />;
      case "forms":
        return <Forms />;
      case "contact":
        return <ContactUs />;

      default:
        return null;
    }
  };

  return (
    <>
      <Header navigate={navigateToPage} />
      {renderActivePage()}
    </>
  );
}

export default Home;
