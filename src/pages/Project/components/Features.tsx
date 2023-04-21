import React from "react";
import styled from "@emotion/styled";
import { ProjectFeaturesItems } from "@/types/project";

const Features = ({ features = {} as ProjectFeaturesItems }) => {
  return <Description>{`•${features.feat}`}</Description>;
};

export default Features;

const Description = styled.p`
  margin-top: 1.5rem;
  line-height: 0.5rem;
`;
