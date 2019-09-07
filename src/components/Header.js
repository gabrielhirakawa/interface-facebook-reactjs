import React, { Component } from "react";
import "../App.css";
import "./Header.css";

import logo from "../assets/facebook-1.png";

class Header extends Component {
  render() {
    return (
      <header id="barra">
        <nav>
          <img id="facebook" src={logo} />
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
