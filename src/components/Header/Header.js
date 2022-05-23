import React, { useState } from 'react';
import Nav from "../Navigation/Navigation";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About/>;
      case "Portfolio":
        return <Portfolio/>;
      case "Contact":
        return <Contact/>;
      case "Resume":
        return <Resume/>;

      default:
        return <About/>;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-item">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/kaylaanngrace"
          >
            <h2 className="">Makayla Wilson</h2>
          </a>
        </div>
      </nav>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav>
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      </Nav>
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;