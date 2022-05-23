import React from "react";

function Navigation(props) {
  const navs = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <div className="d flex justify-content-center">
      <ul className="nav-item">
        {navs.map((nav) => (
          <li
            className={
              props.currentPage === nav ? "nav-item active" : "nav-link"
            }
            key={nav}>
            <a
              href={"#" + nav.toLowerCase()}
              onClick={() => props.handlePageChange(nav)}
              className={
                props.currentPage === nav ? "nav-link active" : "nav-link"
              }>
              {nav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;