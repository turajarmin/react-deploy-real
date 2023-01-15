import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={(navDate) =>
                    navDate.isActive
                      ? "nav-link text-white bg-success"
                      : "nav-link text-white "
                  }
                  to="/"
                >Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                  className={(navDate) =>
                    navDate.isActive
                      ? "nav-link text-white bg-success"
                      : "nav-link text-white "
                  }
                  to="/posts"
                >Posts</NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                  className={(navDate) =>
                    navDate.isActive
                      ? "nav-link text-white bg-success"
                      : "nav-link text-white "
                  }
                  to="/users"
                >Users</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
