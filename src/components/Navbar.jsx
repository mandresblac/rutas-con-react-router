import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    /* <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="btn btn-outline-primary">
          Home
        </NavLink>

        <NavLink to="/about" className="btn btn-outline-primary">
          About
        </NavLink>

        <NavLink to="/blog" className="btn btn-outline-primary">
          Blog
        </NavLink>
      </div>
    </nav> */
    
    <nav className="nav justify-content-end navbar navbar-dark bg-dark grid gap-4">
      <li className="nav-item">
        <NavLink to="/" className="btn btn-outline-primary">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="btn btn-outline-primary">
          About
        </NavLink>
      </li>
      <li className="nav-item me-4">
        <NavLink to="/blog" className="btn btn-outline-primary">
          Blog
        </NavLink>
      </li>
    </nav>
  );
};

export default Navbar;
