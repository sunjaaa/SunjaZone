import React from "react";
import Badge from "@/components/Badge";
import SeparatorLine from "@/components/SeparatorLine";
import styled from "@emotion/styled";
import BlockText from "@/components/BlockText";
import CustomText from "@/components/CustomText";

import Lottie from "react-lottie-player";
import webNApp from "@/assets/lotties/webNApp.json";
import { INFO } from "@/constants/constant";
import { badge } from "@/constants";

const About = () => {
  const openGithubPage = () => {
    window.open(INFO.GITHUB);
  };

  return (
    <Container>
      <Lottie loop animationData={webNApp} play style={lottieStyle} />
      <Wrapper>
        <Box>
          <BlockText title="🧑🏻‍💻 Frontend Developer" thema={true} size={1.5} />
          <ContentBox>
            <CustomText
              label="Frontend에 관심이 많은 개발자입니다. 포스팅에 오류가 있다면 적극 지적해 주세요!"
              size={1.1}
            />
          </ContentBox>
          <SeparatorLine />
          <BlockText title="❤️‍🔥 Interest" thema={true} size={1.5} />
          <ContentBox>
            <Badge src={badge.JAVASCRIPT} />
            <Badge src={badge.TYPESCRIPT} />
            <Badge src={badge.REACT} />
            <Badge src={badge.REACT_NATIVE} />
            <Badge src={badge.NEXTJS} />
            <Badge src={badge.NESTJS} />
            <Badge src={badge.EXPRESS} />
          </ContentBox>
          <SeparatorLine />
          <BlockText title="🔗 Link" thema={true} size={1.5} />
          <ContentBox>
            <CustomText
              label={`GITHUB : ${INFO.GITHUB}`}
              size={1.1}
              onClick={openGithubPage}
              style={{ cursor: "pointer" }}
            />
          </ContentBox>
          <SeparatorLine />
          <BlockText
            title="🙇🏻‍♂️ 간단히 하실 말씀이 있다면, 아래 이메일로 연락해 주세요!"
            thema={true}
            size={1.5}
          />
          <ContentBox>
            <CustomText label={INFO.EMAIL} size={1.1} />
          </ContentBox>
          <Space />
        </Box>
      </Wrapper>
    </Container>
  );
};

export default About;

const lottieStyle = {
  width: 999999,
  height: 500,
};

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
`;

const Box = styled.div`
  margin: 0 1rem 0 1rem;
`;

const ContentBox = styled.picture`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const Space = styled.div`
  margin-top: 5rem;
`;
