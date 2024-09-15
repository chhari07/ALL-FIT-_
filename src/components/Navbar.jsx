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
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 5rem;
        right: 2rem;
        z-index: 9999;
        border: none;
        background: transparent;
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
        background-color: black;
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

      .active .mobile-nav-icon.menu-icon {
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
            <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/login">
              login
            </NavLink>
          
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon menu-icon"
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
