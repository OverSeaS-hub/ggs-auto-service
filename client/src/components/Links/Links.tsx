import { Link } from "react-router-dom";
import "./Links.css";

function Links({ handleClick }: { handleClick: () => void }) {
  return (
    <nav className="links-container">
      <Link to="/About" className="nav-link" onClick={handleClick}>
        About
      </Link>
      <Link to="/Services" className="nav-link" onClick={handleClick}>
        Services
      </Link>
      <Link to="/Contact" className="nav-link" onClick={handleClick}>
        Contact
      </Link>
    </nav>
  );
}

export default Links;
