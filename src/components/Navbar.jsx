import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: white;
            transition: color 0.3s linear;
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
    }

    /* Laptop/Desktop View */
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        position: absolute;
        top: 1.5rem; /* Set the position of the icon on top */
        right: 2rem;
        z-index: 9999; /* Ensure it remains above the rest */
        border: none;
        background: transprent;
        cursor: pointer;

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: white;
        }

        .close-outline {
          display: none;
        }
      }

      .navbar-list {
        width: 100vw;
        height: 100vh;
        background-color: black ;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transform: translateX(100%);
        transition: all 0.3s linear;
      }

      .active .navbar-list {
        transform: translateX(0);
      }

      .active .mobile-nav-icon {
        display: none;
      }

      .active .close-outline {
        display: inline-block;
      }
    }
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/backtoroot">
             Back to roots
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/upcomigs">
              Upcomings
            </NavLink>
          </li>
          

        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
