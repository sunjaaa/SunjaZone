import { ProjectFeaturesItems } from "@/types/project";
import styled from "@emotion/styled";
import React from "react";

interface params {
  features: ProjectFeaturesItems;
}

const Features = ({ features }: params) => {
  return <Description>{`•${features.feat}`}</Description>;
};

export default Features;

const Description = styled.p`
  margin-top: 1.5rem;
  line-height: 0.5rem;
`;
