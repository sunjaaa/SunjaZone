import React from "react";
import styled from "@emotion/styled";

import { content } from "@/constants/index";

interface Props {
  icon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  duration?: string;
}

const CustomItem = ({
  title,
  subtitle,
  description,
  duration,
  icon,
}: Props) => {
  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <Icon>{icon}</Icon>
          <Title>{title}</Title>
        </TitleBox>
        <ContentBox>
          <SubTitle>{subtitle}</SubTitle>
          <Description>{description}</Description>
          <Duration>{duration}</Duration>
        </ContentBox>
      </Wrapper>
    </Container>
  );
};

export default CustomItem;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10dvh;
  padding: 11px 11px 11px 11px;
  margin: 0 16px 0 16px;
  border-radius: 12px;
  border: solid;
  border-color: transparent;
  background-color: ${content.gray.a4};
  &:hover {
    background-color: transparent;
    border: solid;
    border-color: ${content.gray.a4};
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex: 1;
  align-self: flex-start;
`;

const ContentBox = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-self: flex-start;
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
  font-size: 15x;
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
