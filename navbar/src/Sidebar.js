import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Sidebar = () => {
  return (
    <>
      <h4>Sidebar</h4>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" className="logo" />
            <button className="nav-toggle">
              <FaBars />
            </button>
          </div>
          <div className="links-container show-container">
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Sidebar;