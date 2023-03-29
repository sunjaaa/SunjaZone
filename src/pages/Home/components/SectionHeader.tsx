import BlockText from "@/components/BlockText";
import React from "react";

const SectionHeader = ({ title }: any) => {
  if (title === "Work Experiences") {
    return <BlockText title={`🏢 ${title}`} thema={true} size={1.5} />;
  } else {
    return <BlockText title={`🚴‍♂️ ${title}`} thema={true} size={1.5} />;
  }
};

export default SectionHeader;
