import React from "react";

function Resume() {
  return (
    <div className="">

        <a className="" href={process.env.PUBLIC_URL + "../RESUME-MakaylaWilson.pdf"} target="_blank" rel="noreferrer">
          <i class="fa-solid fa-file-arrow-down"></i>
          <span>Download My Resume</span>
        </a>
    </div>
  );
}

export default Resume;
