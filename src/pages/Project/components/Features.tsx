import styled from "@emotion/styled";
import React from "react";

const Features = ({ features }: any) => {
  return <Description>{`•${features.feat}`}</Description>;
};

export default Features;

const Description = styled.p`
  line-height: 0.5rem;
`;
