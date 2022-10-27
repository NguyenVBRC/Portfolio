import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  let menuDisplay = menu ? "block" : "none";

  function clickToDropMenu() {
    setMenu((prevMenu) => !prevMenu);
  }

  return (
    <div className="nav__container">

      <Link to="mySuperPortfolio">
        <img
          src={require("../Images/blue green J.png")}
          alt="J - First Initial Logo"
          id="nav_logo"
        />
      </Link>
      <div className="nav__links">
        <Link id="nav__btn" to="mySuperPortfolio">Home</Link>
        <Link id="nav__btn" to="/About">About</Link>
        <Link id="nav__btn" to="/Projects">Project</Link>
        <Link id="nav__btn" to="/Resume">Resume</Link>
      </div>
      <div className="drop__container" style={{ display: menuDisplay }}>
        <div id="drop__contents">
          <Link to="mySuperPortfolio" onClick={clickToDropMenu}>
            Home
          </Link>
          <Link to="/About" onClick={clickToDropMenu}>
            About
          </Link>
          <Link to="/Projects" onClick={clickToDropMenu}>
            Project
          </Link>
          <Link to="/Resume" onClick={clickToDropMenu}>
            Resume
          </Link>
        </div>
      </div>
      <img
        src={require("../Images/Menu Icon.png")}
        alt="temp menu logo"
        onClick={clickToDropMenu}
        id="hamburger"
      />
    </div>
  );
}
