import React from "react";
import styled from "@emotion/styled";

import Badge from "@/components/Badge";
import { badge } from "@/constants";

import { ProjectTechStackItems } from "@/types/project";

const Badges = ({ techStacks = {} as ProjectTechStackItems }) => {
  const repos =
    {
      react: badge.REACT,
      reactnative: badge.REACT_NATIVE,
      nextjs: badge.NEXTJS,
      nestjs: badge.NESTJS,
      javascript: badge.JAVASCRIPT,
      typescript: badge.TYPESCRIPT,
      docker: badge.DOCKER,
      mariadb: badge.MARIADB,
    }[techStacks.badge] || badge.ERROR;

  return (
    <Container>
      <Badge src={repos} />
    </Container>
  );
};

export default Badges;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
