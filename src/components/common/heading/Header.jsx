import React from "react";
import Head from "./Head";
// import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  // const location = useLocation();
  // const navigate = useNavigate();

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/journal">Journal</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="start">
            <button className="button">GET CERTIFICATE</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
