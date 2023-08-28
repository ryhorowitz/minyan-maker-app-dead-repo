import { Link } from "react-router-dom"
export default function NavBar({ logout }) {
  return (
    <>
      <div className='container'>
        <nav className="navbar justify-content-center navbar-expand-lg navbar-light"
          style={{ background: '#e3f2fd' }}>
          <ul className="navbar-nav ml-auto">

            <div className="container mt-2">
              <div className="row">
                <div className="col">
                  <li className="nav-item"  >
                    <Link className="nav-link" to="/shuls">Shuls</Link>
                  </li>
                </div>
                <div className="col">
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" onClick={logout}>Logout</Link>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </>
  )
}

