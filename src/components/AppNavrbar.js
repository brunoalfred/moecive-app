import React from "react";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <div className="nav navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link" to="/books">
            Books
          </Link>
          <Link className="nav-item nav-link" to="/about">
            About
          </Link>
          <div
            className="navbar-nav"
          >
            <Link className="nav-item nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-item nav-link" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}