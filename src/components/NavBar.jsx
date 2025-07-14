import "../css/Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/movie">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/movie" className="nav-link">
          Home
        </Link>
        <Link to="/movie/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
