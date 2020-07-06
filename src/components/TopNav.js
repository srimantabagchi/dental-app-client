import React from "react";
import AuthPanel from "./AuthPanel";
import "./TopNav.scss";
import { BrowserRouter as NavLink } from "react-router-dom";

export const TopNav = ({
  user,
  children,
  showAuth = true,
  showHeader = true,
  subHeader = false,
}) => (
  <>
    {showHeader && (
      <header className="navbar-links-wrapper false">
        <div className="navbar-links">
          <nav>
            <NavLink to="/offer-submission">Offer Submission</NavLink>
            <NavLink to="/user-management">Administration</NavLink>
          </nav>
          {showAuth && (
            <AuthPanel
              user={user}
              logout={() => window.location.replace("/logout")}
            />
          )}
        </div>
      </header>
    )}
  </>
);

export default TopNav;
