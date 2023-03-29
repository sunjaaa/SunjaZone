import React from "react";
import styled from "@emotion/styled";

import { RiArrowRightSLine } from "react-icons/ri";
import { content } from "@/constants/index";

interface Props {
  icon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  duration?: string;
  onClick?: any;
}

const LargeItem = ({
  title,
  subtitle,
  description,
  duration,
  icon,
  onClick,
}: Props) => {
  return (
    <Container>
      <Wrapper onClick={onClick}>
        <TitleBox>
          <Icon>{icon}</Icon>
          <Title>{title}</Title>
        </TitleBox>
        <CenterBox>
          <SubTitle>{subtitle}</SubTitle>
          <Description>{description}</Description>
          <Duration>{duration}</Duration>
        </CenterBox>
        <RightBox>
          <RiArrowRightSLine size={42} />
        </RightBox>
      </Wrapper>
    </Container>
  );
};

export default LargeItem;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  padding: 0.688rem 0.688rem 0.688rem 0.688rem;
  margin: 0.5rem 0 0.25rem 0;
  border-radius: 0.75rem;
  border: solid;
  border-color: transparent;
  background-color: ${content.gray.a4};
  &:hover {
    background-color: transparent;
    border: solid;
    border-color: ${content.gray.a4};
    cursor: pointer;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex: 1;
  align-self: flex-start;
`;

const CenterBox = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-self: flex-start;
`;

const RightBox = styled.div`
  display: flex;
  flex: 0.3;
  align-self: center;
  justify-content: center;
  color: ${content.gray.a3};
`;

const Icon = styled.div`
  margin: 14px 10px 14px 10px;
`;

const Title = styled.div`
  color: ${content.gray.a1};
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  margin: 14px 10px 14px 0;
`;

const SubTitle = styled.div`
  display: flex;
  color: ${content.gray.a1};
  font-size: 20px;
  font-weight: 900;
  margin: 14px 10px 7px 0;
`;

const Description = styled.div`
  display: flex;
  color: ${content.gray.a3};
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 7px;
`;
const Duration = styled.div`
  display: flex;
  color: ${content.gray.a3};
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 7px;
`;
