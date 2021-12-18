import React from "react";
import { NavItem, NavItems, NavLinkEl as NavLink, SideNavEl } from "./elements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faShoppingCart, faCog } from "@fortawesome/free-solid-svg-icons";

interface SideNavProps {}

export const SideNav: React.FC<SideNavProps> = () => {
  return (
    <SideNavEl>
      <NavItems>
        <NavItem>
          <NavLink to="/dashboard">
            <FontAwesomeIcon icon={faHome} />
            <span className="label">Dashboard</span>
            <span className="bubble"></span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/patients">
            <FontAwesomeIcon icon={faUser} />
            <span className="label">Patients</span>
            <span className="bubble"></span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/settings">
            <FontAwesomeIcon icon={faCog} />
            <span className="label">Settings</span>
            <span className="bubble"></span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/shop">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="label">Shop</span>
            <span className="bubble"></span>
          </NavLink>
        </NavItem>
      </NavItems>
    </SideNavEl>
  );
};
