import React from "react";
import "./Menu.css";
import logo from "../../assets/logo.png";

const Menu = ({ onClick, img }) => {
  return (
    <div className="Menu">
      <img className="Image" src={logo} alt="tetris logo" />
      <button className="Button" onClick={onClick}>
        <a href="#" className="btn-neon">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          PLAY
        </a>
      </button>
    </div>
  );
};

export default Menu;
