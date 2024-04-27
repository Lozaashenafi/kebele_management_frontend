import React from "react";
import "../../../../../public/resource/css copy/style2.css";
import p1 from "../../../../../public/resource/images/p.image/person_1.jpg";
import p2 from "../../../../../public/resource/images/p.image/person_2.jpg";
import p3 from "../../../../../public/resource/images/p.image/person_3.jpg";
import p4 from "../../../../../public/resource/images/p.image/person_4.jpg";

function SecretaryTable() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-wrap">
          <table className="table table-responsive-xl">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Email</th>
                <th>Username</th>
                <th>Status</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
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
                    <span>markotto@email.com</span>
                    <span>Added: 01/03/2020</span>
                  </div>
                </td>
                <td>Markotto89</td>
                <td className="status">
                  <span className="active">Active</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa fa-close"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="alert" role="alert">
                <td>
                  <label className="checkbox-wrap checkbox-primary">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </td>
                <td className="d-flex align-items-center">
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${p1})` }}
                  ></div>
                  <div className="pl-3 email">
                    <span>jacobthornton@email.com</span>
                    <span>Added: 01/03/2020</span>
                  </div>
                </td>
                <td>Jacobthornton</td>
                <td className="status">
                  <span className="waiting">Waiting for Resassignment</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa fa-close"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="alert" role="alert">
                <td>
                  <label className="checkbox-wrap checkbox-primary">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </td>
                <td className="d-flex align-items-center">
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${p2})` }}
                  ></div>
                  <div className="pl-3 email">
                    <span>larrybird@email.com</span>
                    <span>Added: 01/03/2020</span>
                  </div>
                </td>
                <td>Larry_bird</td>
                <td className="status">
                  <span className="active">Active</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa fa-close"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="alert" role="alert">
                <td>
                  <label className="checkbox-wrap checkbox-primary">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </td>
                <td className="d-flex align-items-center">
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${p3})` }}
                  ></div>
                  <div className="pl-3 email">
                    <span>johndoe@email.com</span>
                    <span>Added: 01/03/2020</span>
                  </div>
                </td>
                <td>Johndoe1990</td>
                <td className="status">
                  <span className="active">Active</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa fa-close"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="alert" role="alert">
                <td className="border-bottom-0">
                  <label className="checkbox-wrap checkbox-primary">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </td>
                <td className="d-flex align-items-center border-bottom-0">
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${p4})` }}
                  ></div>
                  <div className="pl-3 email">
                    <span>garybird@email.com</span>
                    <span>Added: 01/03/2020</span>
                  </div>
                </td>
                <td className="border-bottom-0">Garybird_2020</td>
                <td className="status border-bottom-0">
                  <span className="waiting">Waiting for Resassignment</span>
                </td>
                <td className="border-bottom-0">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa fa-close"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SecretaryTable;
