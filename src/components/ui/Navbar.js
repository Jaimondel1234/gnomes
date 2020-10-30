import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import { NavbarList, NavbarElement, ButtonStyle } from "../../styles/core";
import styled from "styled-components";

const ButtonLogoutStyle = styled(ButtonStyle)`
  display: block;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
`;

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };

  return (
    <>
      <NavbarList>
        <NavbarElement>
          <Link exact to="/home">
            Home
          </Link>
        </NavbarElement>
        <NavbarElement>
          <Link exact to="/search">
            Search
          </Link>
        </NavbarElement>
        <NavbarElement>
          <Link exact to="/all-gnomes">
            Gnomes
          </Link>
        </NavbarElement>
        <NavbarElement float="right">
          <ButtonLogoutStyle onClick={handleLogout} m="5px" p="5px 10px">
            Logout
          </ButtonLogoutStyle>
        </NavbarElement>
      </NavbarList>
    </>
  );
};
