import React from "react";

function Nav(props) {
  const navs = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <div className="">
      <ul className="">
        {navs.map((nav) => (
          <li
            className={
              props.currentPage === nav
            }
            key={nav}>
            <a
              href={"#" + nav.toLowerCase()}
              onClick={() => props.handlePageChange(nav)}
              className={
                props.currentPage === nav
              }>
              {nav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;