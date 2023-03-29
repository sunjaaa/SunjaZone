import React from "react";
import styled from "@emotion/styled";
import { SiGithub } from "react-icons/si";

import MediumItem from "@/components/MediumItem";
import CustomText from "@/components/CustomText";
import BlockText from "@/components/BlockText";
import SeparatorLine from "@/components/SeparatorLine";
import Badge from "@/components/Badge";
import { GITHUB } from "@/constants/constant";
import { BADGE } from "@/constants/badge";
import SectionList from "@/components/SectionList";
import ReadMe from "./components/ReadMe";

const DATA = [
  {
    title: "Whatssub-Lite",
    data: [
      {
        id: "section-1",
        icon: "cloudfare",
        title: "Karos",
        subtitle: "JIIN",
        description: "React를 활용한 .... ........... 개발",
        duration: "Nov 2022 ~ Jan 2023",
      },
    ],
  },
  {
    title: "읍읍-읍읍읍",
    data: [
      {
        id: "section-2",
        icon: "zoom",
        title: "Target-Search",
        subtitle: "Search your targets!",
        description:
          "스크랩핑로직 구현과 express로 만든 API로 react-typescript를 프론트로 사용하여 검색사이트 구현",
        duration: "Mar 2023",
      },
    ],
  },
  {
    title: "Sunja-Zone",
    data: [
      {
        id: "section-3",
        icon: "zoom",
        title: "Target-Search",
        subtitle: "Search your targets!",
        description:
          "스크랩핑로직 구현과 express로 만든 API로 react-typescript를 프론트로 사용하여 검색사이트 구현",
        duration: "Mar 2023",
      },
    ],
  },
  {
    title: "Target-Search",
    data: [
      {
        id: "section-4",
        icon: "zoom",
        title: "Target-Search",
        subtitle: "Search your targets!",
        description:
          "스크랩핑로직 구현과 express로 만든 API로 react-typescript를 프론트로 사용하여 검색사이트 구현",
        duration: "Mar 2023",
      },
    ],
  },
];

const Project = () => {
  const renderSectionHeaderHandler = ({ section: { title, data } }: any) => {
    const id = data;
    console.log("iddd", id);

    return (
      <div id={id}>
        <BlockText title={title} thema={true} size={1.5} />
      </div>
    );
  };

  const keyExtractor = (item: any) => {
    return item.id;
  };

  const renderItemHandler = ({ item, index }: any) => {
    return <ReadMe project={item} />;
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <SeparatorLine transparent={true} />
          <SectionList
            sections={DATA}
            keyExtractor={keyExtractor}
            renderItem={renderItemHandler}
            renderSectionHeader={renderSectionHeaderHandler}
          />
          {/* <BlockText title="Sunja-Zone" thema={true} size={1.5} />
          <ContentBox id="section-1">
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
          <SeparatorLine transparent={true} /> */}
          {/* <BlockText title="Sunja-Zone" thema={true} size={1.5} />
          <ContentBox id="section-2">
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
          <SeparatorLine transparent={true} /> */}
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
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
const TextBox = styled.picture`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  flex-direction: column;
`;

const Description = styled.p`
  line-height: 1.7rem;
`;
