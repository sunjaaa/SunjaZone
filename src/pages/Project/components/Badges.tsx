import React from "react";
import styled from "@emotion/styled";

import Badge from "@/components/Badge";
import { badge } from "@/constants";

import { ProjectTechStackItems } from "@/types/project";

interface Props {
  techStacks: ProjectTechStackItems;
}

const Badges = ({ techStacks = { badge: "" } }: Props) => {
  const name = techStacks.badge;

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
    }[name] || badge.ERROR;

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
