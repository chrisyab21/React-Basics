



import { FC } from "react"
import { Link, NavLink } from "react-router-dom"

export const Navbar:FC = () => {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'>useContext</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to={'/'} className={(props) => `nav-link ${props.isActive ? 'active' : ''}`} aria-current="page">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/about'} className={(props) => `nav-link ${props.isActive ? 'active' : '' }`} aria-current="page">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/login'} className={(props) => `nav-link ${props.isActive ? 'active' : '' }`}>Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}
