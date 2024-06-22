import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "@/router";
import "./header.styles.scss";

export const Header: React.FC = () => {
  return (
    <header className="rootHeader">
      <div className="containerHeader">
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_item">
              <Link to={appRoutes?.root} className="nav_link">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link to={appRoutes?.table} className="nav_link">
                Table Component
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
