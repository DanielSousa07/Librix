import {React, useEffect} from "react";
import "../styles/Header.css";
import logo from "../assets/header-logo.svg";
import { Link } from "react-router-dom";
import { initHeaderScrollEffect } from "../utils/headerScroll";

export default function Header() {

  useEffect(() => {
    initHeaderScrollEffect();
  }, []);

  return (
    <header className="header-container">
      <div className="header-logo-area">
        <div className="logo-img">
          <img src={logo} alt="Librix logo" />
        </div>
        <h1 className="logo-text">IBRIX</h1>
      </div>

      <nav className="navbar-box">
        <ul className="navbar-links">
          <li>
            <Link to="/"><a href="">Home</a></Link>
          </li>
          <li>
            <a href="#alfabeto">Alfabeto em Libras</a>
          </li>
          <li>
            <a href="#sobre">Sobre Libras</a>
          </li>
          <li>
            <Link to="/contato"><a>Contato</a></Link>
          </li>
        </ul>
      </nav>

      <div className="call-btn-container">
        <Link to="/jogos" className="call-btn">
          <button className="call-btn">Jogue</button>
        </Link>
      </div>
    </header>
  );
}
