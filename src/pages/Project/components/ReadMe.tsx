import React from "react";
import styled from "@emotion/styled";
import FlatList from "@/components/FlatList";
import Features from "./Features";
import { github } from "@/constants";

import BlockText from "@/components/BlockText";
import CustomText from "@/components/CustomText";
import MediumItem from "@/components/MediumItem";
import SeparatorLine from "@/components/SeparatorLine";
import { SiGithub } from "react-icons/si";
import Badges from "./Badges";
import {
  ProjectDataItems,
  ProjectTechStackItems,
  ProjectFeaturesItems,
} from "../types";

export interface Props {
  project: ProjectDataItems;
}

const ReadMe = ({ project }: Props) => {
  const openGithubRepo = (url: string) => () => {
    window.open(url);
  };

  const renderBadgesHandler = ({ item }: { item: ProjectTechStackItems }) => {
    return <Badges techStacks={item} />;
  };

  const renderDescriptionsHandler = ({
    item,
  }: {
    item: ProjectFeaturesItems;
  }) => {
    return <Features features={item} />;
  };

  const title = project.title;
  const contributors = project.contributors;

  const startDate = project.startDate;
  const endDate = project.endDate;

  const techStack = project.techStack;

  const summary = project.description;

  const features = project.features;

  const repos =
    {
      "Sunja-Zone": github.SUNJAZONE,
      "Target-Search": github.TARGETSEARCH,
    }[title] || github.github_base;

  return (
    <>
      <ContentBox>
        <h1>이미지</h1>
      </ContentBox>
      <BlockText title="📅 기간" thema={true} size={1.5} />
      <ContentBox>
        <CustomText label={`${startDate} ~ ${endDate}`} size={1.1} />
      </ContentBox>
      <SeparatorLine />
      <BlockText title="👩‍💻 사용 기술" thema={true} size={1.5} />
      <ContentBox>
        <FlatList
          data={techStack}
          keyExtractor={(item: ProjectTechStackItems) => item.badge}
          renderItem={renderBadgesHandler}
          horizontal={true}
          style={badgeListItemStyle}
        />
      </ContentBox>
      <SeparatorLine />
      <MediumItem
        icon={<SiGithub size={30} />}
        title={title}
        description={contributors}
        onClick={openGithubRepo(repos)}
      />
      <CustomText label={summary} size={1} style={descriptionStyle} />
      <FlatList
        data={features}
        keyExtractor={(item: ProjectFeaturesItems) => item.feat}
        renderItem={renderDescriptionsHandler}
      />
    </>
  );
};

const ContentBox = styled.picture`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const descriptionStyle = {
  marginTop: "1rem",
};

const badgeListItemStyle = {
  marginRight: "0.2rem",
};

export default ReadMe;
