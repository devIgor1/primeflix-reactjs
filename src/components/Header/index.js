import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link className="logo" to="/">
          Prime <span>Flix</span>
        </Link>
        <Link className="favorites" to="/favorites">
          My Movies
        </Link>
      </header>
      <div id="horizontal-line"></div>
    </div>
  );
}

export default Header;
