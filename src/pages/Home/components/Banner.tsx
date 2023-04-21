import React from "react";
import styled from "@emotion/styled";
import Icon from "@/components/Icon";

const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>
            안녕하세요, <br />
            "클린 코드는 최고의 가치!! <br />
            FrontEnd Engineer 이선재입니다.
            <Description>
              코더가 아닌 개발자의 길을 걷기 위해,
              <br />
              지속적인 학습과 클린 코드의 실천을 목표로 합니다.
            </Description>
          </h1>
        </div>
        <div>
          <Icon icon="devJeans" size={200} />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 65px 0 65px 0;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: lighter;
  color: #77868b;
`;
