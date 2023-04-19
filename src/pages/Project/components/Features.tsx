import styled from "@emotion/styled";
import React from "react";

const Features = ({ features }: any) => {
  return <Description>{`•${features.feat}`}</Description>;
};

export default Features;

const Description = styled.p`
  margin-top: 1rem;
  line-height: 0.5rem;
`;
