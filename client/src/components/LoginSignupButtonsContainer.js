import { Link } from "react-router-dom"
export default function LoginSignupButtonsContainer() {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <li className="nav-item">
              <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Link className="nav-link" to="/login">Login</Link>
              </button>
            </li>
          </div>
          <div className="col">
            <li className="nav-item">
              <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <Link className="nav-link" to="/signup">Signup</Link>
              </button>
            </li>
          </div>
        </div>
      </div>
    </>
  )
}

