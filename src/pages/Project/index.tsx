import React, { useEffect } from "react";
import styled from "@emotion/styled";

import SectionList from "@/components/SectionList";
import ReadMe from "./components/ReadMe";
import ProjectTitle from "./components/ProjectTitle";
import { ProjectDataItems, ProjectDatas } from "@/types/project";
import { useProjects } from "@/hooks/useProjects";

const Project = () => {
  const [projects, getProjects] = useProjects();

  useEffect(() => {
    getProjects();
  }, []);

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
            sections={projects}
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
