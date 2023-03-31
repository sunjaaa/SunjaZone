import BlockText from "@/components/BlockText";
import React from "react";

const ExperienceType = ({ title }: { title: string }) => {
  if (title === "Work Experiences") {
    return <BlockText title={`🏢 ${title}`} thema={true} size={1.5} />;
  } else {
    return <BlockText title={`🚴‍♂️ ${title}`} thema={true} size={1.5} />;
  }
};

export default ExperienceType;
