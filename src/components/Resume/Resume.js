import React from "react";

function Resume() {
  return (
    <div className="">

        <a className="" href={process.env.PUBLIC_URL + "../RESUME-MakaylaWilson.pdf"} target="_blank" rel="noreferrer">
          <span className="icon"> <i className="fas fa-download"></i></span>
          <span>Download My Resume</span>
        </a>
    </div>
  );
}

export default Resume;
