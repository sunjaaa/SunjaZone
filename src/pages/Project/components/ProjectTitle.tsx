import BlockText from "@/components/BlockText";
import React from "react";
import { ProjectDatas } from "@/types/project";

const ProjectTitle = ({ title, data }: ProjectDatas) => {
  const id = data[0]?.id ?? "section-1";

  return (
    <div id={id} style={style}>
      <BlockText title={title} thema={true} size={2} />
    </div>
  );
};

export default ProjectTitle;

const style = {
  paddingTop: "0.8rem",
};
