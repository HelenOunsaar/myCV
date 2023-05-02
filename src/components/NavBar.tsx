import { useState } from "react";
import { NavLink } from "react-router-dom";
import helen from '../image/helen.jpeg'
import Footer from "./Footer";
import * as Icon from 'react-bootstrap-icons'

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (

    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleClick}>
          {click ? <Icon.X /> : <Icon.List />}
        </div>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <img className="image" src={helen} alt="Helen Õunsaar" />
          <h1> HELEN ÕUNSAAR</h1>
          <p>JUNIOR DEVELOPER</p>
          <div className="navbar-link">
            <NavLink to="/" className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
              onClick={closeMobileMenu}>
              ABOUT </NavLink>
            <NavLink to="/education" className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
              onClick={closeMobileMenu}>
              EDUCATION </NavLink>
            <NavLink to="/experience" className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
              onClick={closeMobileMenu}>
              EXPERIENCE </NavLink>
            <NavLink to="/skills" className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
              onClick={closeMobileMenu}>
              SKILLS </NavLink>
          </div>
          <div className="footer-align">
            <Footer />
          </div>
        </div>
      </div>

    </nav>
  )
}

export default NavBar