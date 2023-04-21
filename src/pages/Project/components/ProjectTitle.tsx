import BlockText from "@/components/BlockText";
import React from "react";
import { ProjectDatas } from "@/types/project";
import styled from "@emotion/styled";
import { SECTION } from "@/constants/constant";

const ProjectTitle = ({ title, data = [] }: ProjectDatas) => {
  const id = data[0]?.id ?? SECTION.FIRST;

  return (
    <TitleBox id={id}>
      <BlockText title={title} thema={true} size={2} />
    </TitleBox>
  );
};

export default ProjectTitle;

const TitleBox = styled.div`
  padding-top: "0.8rem";
`;
