import Links from "../Links/Links";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="nav-container">
      <div className="nav-sub-container">
        <div className="nav-title">
          <Link to="/" className="title-text">
            GG'S <br />
            AutoServices.
          </Link>
        </div>
        <button
          type="button"
          id="check"
          onClick={() => {
            handleClick();
          }}
          className={`btn-menu ${isClicked ? "show" : ""}`}
        >
          <IoMenu className="button-lines" />
        </button>
      </div>
      <nav className={`nav ${isClicked ? "show" : ""}`}>
        <Links handleClick={handleClick} />
      </nav>
    </div>
  );
}

export default Navbar;
