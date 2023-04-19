import React, { useEffect } from "react";
import styled from "@emotion/styled";

import SeparatorLine from "@/components/SeparatorLine";
import SectionList from "@/components/SectionList";

import Banner from "./components/Banner";
import ExperiencesList from "./components/ExperiencesList";
import ExperienceHeader from "./components/ExperienceHeader";

import { HomeDataItems, HomeDatas } from "@/types/home";
import { useHomes } from "@/hooks/useHomes";
import { useProjects } from "@/hooks/useProjects";
import _ from "lodash";

const Main = () => {
  const [homes, getHomes] = useHomes();
  const [projects, getProjects] = useProjects();

  useEffect(() => {
    getHomes();
    getProjects();
  }, []);

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
    return <ExperienceHeader title={title} />;
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <Banner />
          <SectionList
            sections={homes}
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
