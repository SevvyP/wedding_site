import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/events" activeStyle>
            Events
          </NavLink>
          <NavLink to="/annual" activeStyle>
            Annual Report
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/admin" activeStyle>
            Admin
          </NavLink>
          {/* Second Nav */}
          <NavBtnLink to="/admin">Sign In</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
