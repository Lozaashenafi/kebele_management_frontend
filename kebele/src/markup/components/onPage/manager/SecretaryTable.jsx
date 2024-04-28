import React, { useEffect, useState } from "react";
import "../../../../../public/resource/css copy/style2.css";
import p1 from "../../../../../public/resource/images/p.image/person_1.jpg";
import p2 from "../../../../../public/resource/images/p.image/person_2.jpg";
import p3 from "../../../../../public/resource/images/p.image/person_3.jpg";
import p4 from "../../../../../public/resource/images/p.image/person_4.jpg";
import { useToast } from "../../../../context/ToastContext";
import profileService from "../../../../services/profileService";

function SecretaryTable({ fetchData, secretarys }) {
  const { toastData, hideToast, setToastData } = useToast();

  const handleDelete = async (id) => {
    // This function can be implemented to handle delete actions
    console.log(`Delete secretary ${id}`);
    //diag
    const res = await profileService.delete(id);
    setToastData(res);
    if (res.success) {
      fetchData();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" mx-auto">
      <div className=" col-md-12">
        <div className="table-wrap">
          <table className=" table table-responsive-xl">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Email</th>
                <th>phone</th>
                <th>Status</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {secretarys.map((secretary) => {
                return (
                  <tr className="alert" role="alert">
                    <td>
                      <label className="checkbox-wrap checkbox-primary">
                        <input type="checkbox" checked />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td className="d-flex align-items-center">
                      <div
                        className="img"
                        style={{ backgroundImage: `url(${p1})` }}
                      ></div>
                      <div className="pl-3 email">
                        <span>{secretary.email}</span>
                      </div>
                    </td>
                    <td>{secretary.phone}</td>
                    <td className="status">
                      <span className="active">{secretary.activeStatus}</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span
                          onClick={() => handleDelete(secretary.id)}
                          aria-hidden="true"
                        >
                          <i className="fa fa-close"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SecretaryTable;
