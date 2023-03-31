import BlockText from "@/components/BlockText";
import React from "react";
import { HomeDatas } from "../types";

const ExperienceType = ({ title }: HomeDatas) => {
  if (title === "Work Experiences") {
    return <BlockText title={`🏢 ${title}`} thema={true} size={1.5} />;
  } else {
    return <BlockText title={`🚴‍♂️ ${title}`} thema={true} size={1.5} />;
  }
};

export default ExperienceType;
