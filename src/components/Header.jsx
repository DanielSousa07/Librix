import React from "react";
import "../styles/Header.css";
import logo from "../assets/header-logo.svg";


export default function Header() {
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
          <li><a href="#home">Home</a></li>
          <li><a href="#alfabeto">Alfabeto em Libras</a></li>
          <li><a href="#jogos">Jogos</a></li>
          <li><a href="#sobre">Sobre Libras</a></li>
        </ul>
      </nav>

      <div className="call-btn-container">
        <button className="call-btn">Contato</button>
      </div>
    </header>
  );
}
