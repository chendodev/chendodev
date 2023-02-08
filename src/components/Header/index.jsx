import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@context/GlobalContext";
import useMediaQuery from '@hooks/useMediaQuery';
import { NavLink } from 'react-router-dom'
import Master from "@images/master.jpg";
import Close from "./close";

const Header = () => {

  const { menuBtn, setMenuBtn } = useContext(GlobalContext);
  const matches = useMediaQuery("(max-width: 992px)");
  const [date, setDate] = useState();
  // Get Year
  const getYear = () => setDate(new Date().getFullYear());
  // Dinamic Link Transform
  const setStyles = () => {
    setMenuBtn(false);
  }
  // Style Color Active
  const color = {
    color: "#42b883"
  }
  // Render
  useEffect(() => {
    getYear();
  }, [])

  return(
    <header>
      <div className={menuBtn && matches ? "navigation transform" : "navigation"}>
        <div className="container">
          { matches ? <Close /> : null }
          <div className="row-cont">
            <div className="col-img">
              <div className="pulse">
                <a href="/"><img src={Master} alt="Master" /></a>
                <span>chendo</span>
                <span className="span">@chendodev</span>
              </div>
            </div>
            <div className="col-menu">
              <div className="nav">
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={setStyles}
                  style={({ isActive }) => (isActive ? {color: color.color} : null)}
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/about"
                  onClick={setStyles}
                  style={({ isActive }) => (isActive ? {color: color.color} : null)}
                >
                  Sobre mi
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={setStyles}
                  style={({ isActive }) => (isActive ? {color: color.color} : null)}
                >
                  Contacto
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/portfolio"
                  onClick={setStyles}
                  style={({ isActive }) => (isActive ? {color: color.color} : null)}
                >
                  Portafolio
                  </NavLink>
                <a className="nav-link" href="https://github.com/chendodev/chendodev.github.io" target="_blank">Code</a>
              </div>
            </div>
            <div className="menu-social">
              <a href="https://github.com/chendodev" aria-label="github" target="_blank"><i className="fab fa-github"></i></a>
              <a href="https://www.youtube.com/@chendodev" aria-label="youtube" target="_blank"><i className="fab fa-youtube"></i></a>
              <a href="https://www.facebook.com/chendoio" aria-label="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/chendodev" aria-label="instagram" target="_blank"><i className="fab fa-instagram"></i></a>
              <footer>Copyright @ {date}</footer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
