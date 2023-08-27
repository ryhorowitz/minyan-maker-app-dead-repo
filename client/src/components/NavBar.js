import { Link } from "react-router-dom"
import LogoutButton from "./LogoutButton"
export default function NavBar({ logout }) {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <li className="nav-item"  >
              <Link className="nav-link" to="/login" onClick={''}>Shuls</Link>
            </li>
          </div>
          <div className="col">
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={logout}>Logout</Link>
            </li>
          </div>
        </div>
      </div>
    </>
  )
}

