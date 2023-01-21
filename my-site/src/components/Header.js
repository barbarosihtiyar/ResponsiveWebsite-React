import React from 'react'
import "./Header.css";
import "../App.css";
import {GiUbisoftSun} from "react-icons/gi";
import {Link} from 'react-scroll'
import {GoThreeBars} from 'react-icons/go';
import {useState} from 'react'
function Header() {
  const [header,setHeader] = useState(false);

 
  return (
    <div className={header ? "header" : "header active"}>
      <div className="headerContainer">
        <div className="headerWrapper">
          <div className="logo">
          <GiUbisoftSun className='logoIcon' />
          <span className="logoTitle"><Link to="homepage">SQUARESPACE</Link></span>
          </div>
          <div className="links">
          <ul>
            <li className="linkProduct">
              <Link to="website">Product</Link>
            </li>
            <li className="linkTemplates">
              <Link to="market">
                Templates
              </Link>
              </li>
              <li className="linkResources">
              <Link to="covered">
                Resources
              </Link>
              </li>
          </ul>
          </div>
          <div className="userEntry">
          <div className="hamburger">
            <GoThreeBars />
          </div>
            <span className="logIn">
              LOG IN
            </span>
            <span className="getStarted">
              GET STARTED
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header