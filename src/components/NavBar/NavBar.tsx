import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { content, NAV } from "@/constants/index";

const NavBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <NavContainer>
      <nav>
        <NavList>
          <NavItem>
            <NavLink
              href={NAV.HREF.ROOT}
              isActive={currentRoute === NAV.HREF.ROOT}
            >
              {NAV.PAGE.ROOT}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href={NAV.HREF.PROJECT}
              isActive={currentRoute === NAV.HREF.PROJECT}
            >
              {NAV.PAGE.PROJECT}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href={NAV.HREF.BLOG}
              isActive={currentRoute === NAV.HREF.BLOG}
            >
              {NAV.PAGE.BLOG}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href={NAV.HREF.ISSUE}
              isActive={currentRoute === NAV.HREF.ISSUE}
            >
              {NAV.PAGE.ISSUE}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href={NAV.HREF.ABOUT}
              isActive={currentRoute === NAV.HREF.ABOUT}
            >
              {NAV.PAGE.ABOUT}
            </NavLink>
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

const NavLink = styled(Link)<{ isActive?: boolean }>`
  color: black;
  text-decoration: none;
  &:hover {
    color: ${content.primary.common};
  }
  ${(props) =>
    props.isActive &&
    `
    color: ${content.primary.common};
    font-weight: bold;
    border-bottom: solid;
  `}
`;
