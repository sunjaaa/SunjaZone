import React from "react";
import styled from "@emotion/styled";

import SeparatorLine from "@/components/SeparatorLine";
import SectionList, { SectionListData } from "@/components/SectionList";

import Banner from "./components/Banner";
import ExperiencesList from "./components/ExperiencesList";
import ExperienceType from "./components/ExperienceType";

import { HomeDataItems, HomeDatas } from "./types";

const DATA: SectionListData<HomeDataItems>[] = [
  {
    title: "Work Experiences",
    data: [
      {
        id: "section-1",
        icon: "cloudfare",
        title: "Karos",
        subtitle: "JIIN",
        description: "React를 활용한 .... ........... 개발",
        duration: "Nov 2022 ~ Jan 2023",
      },
      {
        id: "section-2",
        icon: "zoom",
        title: "Whatssub-Lite",
        subtitle: "Whatssub Internships",
        description: "React-Native를 활용한 애플리케이션 개발",
        duration: "Nov 2022 ~ Jan 2023",
      },
    ],
  },
  {
    title: "Personal Experience",
    data: [
      {
        id: "section-3",
        icon: "zoom",
        title: "Sunja-Zone",
        subtitle: "Sunjaaa's website",
        description: "NextJS를 활용한 웹사이트 개발",
        duration: "Mar 2023 ~",
      },
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

const Main = () => {
  const keyExtractor = (item: HomeDataItems) => {
    return `experiences_${item.id}`;
  };

  const renderItemHandler = ({ item }: { item: HomeDataItems }) => {
    return <ExperiencesList experience={item} />;
  };

  const renderSectionHeaderHandler = ({
    section: { title, data },
  }: {
    section: HomeDatas;
  }) => {
    return <ExperienceType title={title} />;
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <Banner />
          <SectionList
            sections={DATA}
            keyExtractor={keyExtractor}
            renderItem={renderItemHandler}
            renderSectionHeader={renderSectionHeaderHandler}
            SectionFooterComponent={<SeparatorLine transparent={true} />}
          />
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Main;

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
