import React from "react";
import styled from "@emotion/styled";
import { content } from "@/constants/index";

interface LayoutProps {
  header?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;
}

const Layout = ({ header, main, footer }: LayoutProps) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Main>{main}</Main>
      <Footer>{footer}</Footer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  flex: 0.8;
  height: 100%;
  width: 100vw;
`;
const Main = styled.main`
  display: flex;
  flex: 11;
  height: 100%;
`;
const Footer = styled.footer`
  display: flex;
  flex: 2;
  background-color: ${content.gray.a4};
  height: 100%;
  width: 100vw;
`;
