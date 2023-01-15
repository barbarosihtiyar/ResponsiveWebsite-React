import React from 'react'
import "./Header.css";
import "../App.css";
import {GiUbisoftSun} from "react-icons/gi";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function Header() {
  return (
    <div className='header'>
      <div className="headerContainer">
        <div className="headerWrapper">
          <div className="logo">
          <GiUbisoftSun className='logoIcon' />
          <span className="logoTitle">SQUARESPACE</span>
          </div>
          <Router>
          <div className="links">
          <ul>
            <li className="linkProduct">
              <Link to="/product">Product</Link>
            </li>
            <li className="linkTemplates">
              <Link to="/Templates">
                Templates
              </Link>
              </li>
              <li className="linkResources">
              <Link to="Resources">
                Resources
              </Link>
              </li>
          </ul>
          </div>
          <div className="userEntry">
            <span className="logIn">
              LOG IN
            </span>
            <span className="getStarted">
              GET STARTED
            </span>
          </div>
          <Routes>
            <Route path='/product'>

            </Route>
            <Route path='/users'>

            </Route>
            <Route path='/'>

            </Route>
          </Routes>
          </Router>
        </div>
      </div>
    </div>
  )
}

export default Header