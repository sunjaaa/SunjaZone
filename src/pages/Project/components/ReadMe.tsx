import Badge from "@/components/Badge";
import BlockText from "@/components/BlockText";
import CustomText from "@/components/CustomText";
import MediumItem from "@/components/MediumItem";
import SeparatorLine from "@/components/SeparatorLine";
import { SiGithub } from "react-icons/si";
import { BADGE } from "@/constants/badge";
import { GITHUB } from "@/constants/constant";
import styled from "@emotion/styled";
import React from "react";

const ReadMe = ({ project }: any) => {
  const openGithubProject = () => {
    window.open(GITHUB.CAROUSEL);
  };

  return (
    <>
      <ContentBox>
        <h1>이미지</h1>
      </ContentBox>
      <BlockText title="📅 기간" thema={true} size={1.5} />
      <ContentBox>
        <CustomText label="2022.00.00 ~ 2022.00.00" size={1.1} />
      </ContentBox>
      <SeparatorLine />
      <BlockText title="👩‍💻 사용 기술 " thema={true} size={1.5} />
      <ContentBox>
        <Badge src={BADGE.NEXTJS} />
        <Badge src={BADGE.TYPESCRIPT} />
        <Badge src={BADGE.NESTJS} />
        <Badge src={BADGE.MARIADB} />
        <Badge src={BADGE.DOCKER} />
      </ContentBox>
      <SeparatorLine />
      <MediumItem
        icon={<SiGithub size={30} />}
        title="Sunja-Zone"
        description="sunjaaa"
        onClick={openGithubProject}
      />
      <TextBox>
        <CustomText
          label="한세사이버보안고등학교에서 매년 진행하는 교내 해커톤으로 인해 학생회 기능부에서 랜딩 페이지 및 관리 서비스를 개발 및 기획하였습니다. "
          size={1}
        />
        <Description>
          • 해커톤 참가자들이 작업한 파일을 제출, 공유, 관리 시스템 구현
          <br />
          • 해커톤 참가자들이 작업한 파일을 제출, 공유, 관리 시스템
          <br />
          • 해커톤 참가자들이 작업한 파일을 제출, 공유, 관리 시스템
          <br />
        </Description>
      </TextBox>
    </>
  );
};

const ContentBox = styled.picture`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
const TextBox = styled.picture`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  flex-direction: column;
`;

const Description = styled.p`
  line-height: 1.7rem;
`;

export default ReadMe;
