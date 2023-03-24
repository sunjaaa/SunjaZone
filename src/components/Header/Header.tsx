import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import styled from "@emotion/styled";
import Link from "next/link";
import { content } from "@/constants/index";
import Icon from "../Icon/Icon";

const Header = () => {
  return (
    <Container>
      <NavBar />
      <ImageBox>
        <Favicon>
          <Link href="/">
            <Icon icon="logo" size={36} />
          </Link>
        </Favicon>
      </ImageBox>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 28%;
  padding-right: 28%;
  border-style: solid;
  border-top-width: thin;
  border-bottom-width: thin;
  border-left: 0;
  border-right: 0;
  border-color: ${content.gray.a4};
`;

const ImageBox = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

const Favicon = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: flex-end;
  margin-top: 10%;
`;
