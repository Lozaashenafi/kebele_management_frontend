import React, { useReducer } from "react";
import AddKebele from "../../../components/onPage/admin/AddKebele";
import KebeleList from "../../../components/onPage/admin/KebeleList";
import AddManager from "../../../components/onPage/admin/AddManager";
import ManagerList from "../../../components/onPage/admin/ManagerList";

// Define action types
const ActionTypes = {
  SHOW_ADD_KEBELE: "SHOW_ADD_KEBELE",
  SHOW_KEBELE_LIST: "SHOW_KEBELE_LIST",
  SHOW_ADD_MANAGER: "SHOW_ADD_MANAGER",
  SHOW_MANAGER_LIST: "SHOW_MANAGER_LIST",
};

// Reducer function to manage component state
const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_ADD_KEBELE:
      return {
        activeComponent: (
          <>
            <AddKebele />
          </>
        ),
      };
    case ActionTypes.SHOW_ADD_MANAGER:
      return {
        activeComponent: (
          <>
            <AddManager />
          </>
        ),
      };
    case ActionTypes.SHOW_KEBELE_LIST:
      return {
        activeComponent: (
          <>
            <KebeleList />
          </>
        ),
      };
    case ActionTypes.SHOW_MANAGER_LIST:
      return {
        activeComponent: (
          <>
            <ManagerList />
          </>
        ),
      };

    default:
      return state;
  }
};

function HomeA() {
  // Initialize state using reducer
  const [state, dispatch] = useReducer(reducer, {
    activeComponent: (
      <>
        <AddKebele />
      </>
    ), // Default active component
  });

  return (
    <>
      <section className="bg-slate-200 w-screen h-screen">
        <div className="w-4/5 h-10 mx-auto pt-10 flex justify-between">
          <div className="text-3xl font-bold text-sky-800 font-serif">
            Admin
          </div>
          <div className="flex gap-36 pt-3">
            {/* Dispatch actions to switch between components */}
            <p
              className="cursor-pointer hover:bg-cyan-700"
              onClick={() => dispatch({ type: ActionTypes.SHOW_ADD_KEBELE })}
            >
              Add kebele
            </p>
            <p
              className="cursor-pointer hover:bg-cyan-700"
              onClick={() => dispatch({ type: ActionTypes.SHOW_ADD_MANAGER })}
            >
              Add manager
            </p>
            <li
              className="cursor-pointer hover:bg-cyan-700"
              onClick={() => dispatch({ type: ActionTypes.SHOW_KEBELE_LIST })}
            >
              List kebele
            </li>
            <li
              className="cursor-pointer hover:bg-cyan-700"
              onClick={() => dispatch({ type: ActionTypes.SHOW_MANAGER_LIST })}
            >
              List manager
            </li>
          </div>
          <div>XX</div>
        </div>
        <div className="mx-auto mt-16 w-4/5 h-96 bg-white rounded-3xl">
          {/* Render the active component */}
          {state.activeComponent}
        </div>
      </section>
    </>
  );
}

export default HomeA;
