import React from 'react'
import { NavLink } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './index.css'
import { UserContext } from './App'
import { useContext } from 'react'
export default function Navbar() {
  const {state,dispatch}=useContext(UserContext);
  const Rendermenu=()=>
  {
    if(state)
   {
      return(
      <>
     <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/start">Contact</NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/logout">Log out</NavLink>
              </li>
             
      </>
    )
  }
  else{
    return(
      <>
      <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/start">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/signup">Sign Up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/login">Log In</NavLink>
              </li>
      </>
    )
  }
  }
  return (
    <div>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand"
          to="/">Wellbeing</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Rendermenu/>
            </ul>
          </div>
        </div>
      </nav>
      </div>
          </div>
        </div>
    </div>
  )
}
