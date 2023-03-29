import React from "react";
import styled from "@emotion/styled";

import NavLink from "./components/NavLink";
import { NAV } from "@/constants/index";

const NavBar = () => {
  return (
    <NavContainer>
      <nav>
        <NavList>
          <NavItem>
            <NavLink href={NAV.HREF.ROOT}>{NAV.PAGE.ROOT}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={NAV.HREF.PROJECT}>{NAV.PAGE.PROJECT}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={NAV.HREF.BLOG}>{NAV.PAGE.BLOG}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={NAV.HREF.ISSUE}>{NAV.PAGE.ISSUE}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={NAV.HREF.ABOUT}>{NAV.PAGE.ABOUT}</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.div`
  display: flex;
  flex: 9;
  height: 100%;
  text-align: center;
  align-items: center;
  margin-left: 16px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  display: flex;
  flex: 1;
  margin-right: 20%;
`;
