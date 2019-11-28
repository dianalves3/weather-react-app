import React from "react";
import "./GPS.css";

export default function GPS(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 gps">
          <button type="button" className="btn btn-outline-dark">
            GPS
          </button>
        </div>
        <div className="col-6">
          <p id="gps" />
        </div>
      </div>
    </div>
  );
}
