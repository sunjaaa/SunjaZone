import React from "react";
import styled from "@emotion/styled";

import { RiArrowRightSLine } from "react-icons/ri";
import { content } from "@/constants/index";

interface Props {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  onClick?: React.MouseEventHandler;
}

const MediumItem = ({ title, description, icon, onClick }: Props) => {
  return (
    <Container>
      <Wrapper onClick={onClick}>
        <LeftBox>{icon}</LeftBox>
        <CenterBox>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </CenterBox>
        <RightBox>
          <RiArrowRightSLine size={24} />
        </RightBox>
      </Wrapper>
    </Container>
  );
};

export default MediumItem;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0.3rem;
  border: solid;
  margin: 0.25rem 0 0.25rem 0;
  border-color: ${content.gray.a4};
  background-color: transparent;
  &:hover {
    background-color: ${content.gray.a4};
    border: solid;
    border-color: ${content.gray.a4};
    cursor: pointer;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: center;
`;

const CenterBox = styled.div`
  display: flex;
  flex: 11;
  flex-direction: column;
  align-self: flex-start;
  margin: 0.4rem 0 0.4rem 0;
`;

const RightBox = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: center;
  color: ${content.gray.a3};
`;

const Title = styled.div`
  display: flex;
  color: ${content.gray.a1};
  font-size: 1rem;
  font-weight: 900;
`;

const Description = styled.div`
  display: flex;
  color: ${content.gray.a3};
  font-size: 0.8rem;
  font-weight: 400;
`;
