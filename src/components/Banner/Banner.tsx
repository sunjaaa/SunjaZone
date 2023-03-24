import React from "react";
import styled from "@emotion/styled";
import Icon from "../Icon/Icon";

const Banner = () => {
  return (
    <Container>
      <div>
        <h1>
          안녕하세요, <br />
          FrontEnd Engineer 이선재입니다.
          <Description>
            생각없이 복종하며 졸음에 빠진 삶을 이어나가는 '코더'가 아닌,
            <br />
            자신의 코드와 조직을 지배하는 '개발자'가 목표입니다.
          </Description>
        </h1>
      </div>
      <div>
        <Icon icon="devJeans" size={200} />
      </div>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
  justify-content: space-around;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: lighter;
  color: #77868b;
`;
