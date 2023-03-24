import React from "react";
import styled from "@emotion/styled";

const Banner = () => {
  return (
    <Container>
      <Title>
        안녕하세요, <br />
        FrontEnd Engineer 이선재입니다.
        <Description>
          생각없이 복종하며 졸음에 빠진 삶을 이어나가는 '코더'가 아닌,
          <br />
          자신의 코드와 조직을 지배하는 '개발자'가 목표입니다.
        </Description>
      </Title>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
`;
const Title = styled.h1``;

const Description = styled.p`
  font-size: 16px;
  font-weight: lighter;
  color: #77868b;
`;
