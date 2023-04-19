import { ProjectFeaturesItems } from "@/types/project";
import styled from "@emotion/styled";
import React from "react";

interface params {
  features: ProjectFeaturesItems;
}

const Features = ({
  features = { feat: "데이터를 불러오는 중 입니다." },
}: params) => {
  return <Description>{`•${features.feat}`}</Description>;
};

export default Features;

const Description = styled.p`
  margin-top: 1.5rem;
  line-height: 0.5rem;
`;
