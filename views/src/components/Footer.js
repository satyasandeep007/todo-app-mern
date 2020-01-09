import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="progress sticky-bottom" style={{ height: "1px", marginTop:"200px"  }}>
      </div>
      <div className="alert alert-warning" role="alert">
        <p>
          Developed by
          <a className="alert-link" href="https://www.satyasandeep.in">
            {" "}
            Satya Sandeep
          </a>
        </p>
        <a
          className="alert-link"
          href="https://github.com/satyasandeep007/todo-app-react"
        >
          View Code
        </a>
      </div>
    </div>
  );
}
