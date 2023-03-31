import React from "react";
import styled from "@emotion/styled";

import SectionList, { SectionListData } from "@/components/SectionList";

import ReadMe from "./components/ReadMe";
import ProjectTitle from "./components/ProjectTitle";
import { ProjectDataItems, ProjectDatas } from "./types";

const DATA: SectionListData<ProjectDataItems>[] = [
  {
    title: "Whatssub-Lite",
    data: [
      {
        id: "section-1",

        icon: "cloudfare",
        url: "imgurl",
        startDate: "2022.11.11",
        endDate: "2023.12.12",
        techStack: [
          {
            badge: "javascript",
          },
          {
            badge: "reactnative",
          },
        ],
        title: "Whatssub-Lite",
        contributors: "sunjaaa",
        description:
          "한세사이버보안고등학교에서 매년 진행하는 교내 해커톤으로 인해 학생회 기능부에서 랜딩 페이지 및 관리 서비스를 개발 및 기획하였습니다. ",
        features: [
          {
            feat: "해커톤 참가자들이 작업한 파일을 제출, 공유, 관리 시스템 구현",
          },
          {
            feat: "학교 내의 네트워크와 상대 컴퓨터의 네트워크 교차 검증을 통한 교내망 인증 기능 추가",
          },
          { feat: "해커톤 팀원 구직 및 구성 기능 구현" },
          {
            feat: "제출 deadline에 맞춰 제출 제한 및 약 동시 50명 이상의 제출 트래픽 처리",
          },
          {
            feat: "passport와 guard를 통한 jwt auth 기능 구현",
          },
          {
            feat: "winston을 이용하여 product 로깅 설정 및 모니터링 기능 구현",
          },
          {
            feat: "교내의 물리 서버를 통하여 실제 프로덕트 배포",
          },
        ],
      },
    ],
  },
  {
    title: "읍읍-읍읍읍",
    data: [
      {
        id: "section-2",
        icon: "cloudfare",
        url: "imgurl",
        startDate: "2022.03.30",
        endDate: "2023.10.10",
        techStack: [
          {
            badge: "typescript",
          },
          {
            badge: "react",
          },
        ],
        title: "읍읍-읍읍읍",
        contributors: "sunjaaa with 0000",
        description: "React를 활용한 .... ........... 개발",
        features: [
          {
            feat: "해커톤 참가자들이 작업한 파일을 제출, 공유, 관리 시스템 구현",
          },
          {
            feat: "학교 내의 네트워크와 상대 컴퓨터의 네트워크 교차 검증을 통한 교내망 인증 기능 추가",
          },
          { feat: "해커톤 팀원 구직 및 구성 기능 구현" },
          {
            feat: "제출 deadline에 맞춰 제출 제한 및 약 동시 50명 이상의 제출 트래픽 처리",
          },
          {
            feat: "passport와 guard를 통한 jwt auth 기능 구현",
          },
          {
            feat: "winston을 이용하여 product 로깅 설정 및 모니터링 기능 구현",
          },
          {
            feat: "교내의 물리 서버를 통하여 실제 프로덕트 배포",
          },
        ],
      },
    ],
  },
  {
    title: "Sunja-Zone",
    data: [
      {
        id: "section-3",
        icon: "cloudfare",
        url: "imgurl",
        startDate: "2022.00.00",
        endDate: "2023.00.00",
        techStack: [
          {
            badge: "nextjs",
          },
          {
            badge: "typescript",
          },
          {
            badge: "nestjs",
          },
          {
            badge: "mariadb",
          },
          {
            badge: "docker",
          },
        ],
        title: "Sunja-Zone",
        contributors: "sunjaaa",
        description:
          "한세사이버보안고등학교에서 매년 진행하는 교내 해커톤으로 인해 학생회 기능부에서 랜딩 페이지 및 관리 서비스를 개발 및 기획하였습니다. ",
        features: [
          {
            feat: "해커톤 참가자들이 작업한 파일을 제출, 공유, 관리 시스템 구현",
          },
          {
            feat: "학교 내의 네트워크와 상대 컴퓨터의 네트워크 교차 검증을 통한 교내망 인증 기능 추가",
          },
          { feat: "해커톤 팀원 구직 및 구성 기능 구현" },
          {
            feat: "제출 deadline에 맞춰 제출 제한 및 약 동시 50명 이상의 제출 트래픽 처리",
          },
          {
            feat: "passport와 guard를 통한 jwt auth 기능 구현",
          },
          {
            feat: "winston을 이용하여 product 로깅 설정 및 모니터링 기능 구현",
          },
          {
            feat: "교내의 물리 서버를 통하여 실제 프로덕트 배포",
          },
        ],
      },
    ],
  },
  {
    title: "Target-Search",
    data: [
      {
        id: "section-4",
        icon: "cloudfare",
        url: "imgurl",
        startDate: "2022.8.16",
        endDate: "2023.00.00",
        techStack: [
          {
            badge: "react",
          },
          {
            badge: "typescript",
          },
        ],
        title: "Target-Search",
        contributors: "sunjaaa",
        description: "React Typescript를 활용하여  .... ........... 개발",
        features: [
          {
            feat: "해커톤 참가자들이 작업한 파일을 제출, 공유, 관리 시스템 구현",
          },
          {
            feat: "학교 내의 네트워크와 상대 컴퓨터의 네트워크 교차 검증을 통한 교내망 인증 기능 추가",
          },
          { feat: "해커톤 팀원 구직 및 구성 기능 구현" },
          {
            feat: "제출 deadline에 맞춰 제출 제한 및 약 동시 50명 이상의 제출 트래픽 처리",
          },
          {
            feat: "passport와 guard를 통한 jwt auth 기능 구현",
          },
          {
            feat: "winston을 이용하여 product 로깅 설정 및 모니터링 기능 구현",
          },
          {
            feat: "교내의 물리 서버를 통하여 실제 프로덕트 배포",
          },
        ],
      },
    ],
  },
];

const Project = () => {
  const keyExtractor = (item: ProjectDataItems) => {
    return `project_${item.id}`;
  };

  const renderItemHandler = ({ item }: { item: ProjectDataItems }) => {
    return <ReadMe project={item} />;
  };

  const renderSectionHeaderHandler = ({
    section: { title, data },
  }: {
    section: ProjectDatas;
  }) => {
    return <ProjectTitle title={title} data={data} />;
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <SectionList
            sections={DATA}
            keyExtractor={keyExtractor}
            renderItem={renderItemHandler}
            renderSectionHeader={renderSectionHeaderHandler}
          />
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
