import { Link } from "react-router-dom";
import "../index.css";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        React Quiz App
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
