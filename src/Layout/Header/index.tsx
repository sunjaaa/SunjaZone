import React from "react";
import NavBar from "@/components/NavBar";
import styled from "@emotion/styled";
import Link from "next/link";
import { content, NAV } from "@/constants/index";
import Icon from "@/components/Icon";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <NavBar />
        <ImageBox>
          <Link href={NAV.HREF.ROOT}>
            <Icon icon="logo" size={36} />
          </Link>
        </ImageBox>
      </Wrapper>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50rem;
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
  justify-content: flex-end;
  align-items: center;
  margin-right: 16px;
`;
