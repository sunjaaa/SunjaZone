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
} from "@/types/project";
import Image from "next/image";
import { IMAGE_URL } from "@/constants/constant";

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

  const imgSrc =
    {
      "Whatssub-Lite": (
        <Image
          src={IMAGE_URL.whatssub}
          alt={`alt_${IMAGE_URL.whatssub}`}
          width={500}
          height={700}
          priority
        />
      ),
      "Sunja-Zone": (
        <Image
          src={IMAGE_URL.sunjazone}
          alt={`alt_${IMAGE_URL.sunjazone}`}
          width={600}
          height={700}
          priority
        />
      ),
      "Target-Search": (
        <Image
          src={IMAGE_URL.targetSearch}
          alt={`alt_${IMAGE_URL.targetSearch}`}
          width={700}
          height={700}
          priority
        />
      ),
    }[title] || "";

  return (
    <>
      <ContentBox style={ImageBoxStyle}>{imgSrc}</ContentBox>
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

export default ReadMe;

const ImageBoxStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
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
