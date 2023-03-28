import React from "react";
import styled from "@emotion/styled";

interface Props {
  transparent: boolean;
}

const SeperatorLine = ({ transparent }: Props) => {
  return <Seperator transparent={transparent} />;
};

export default SeperatorLine;

const Seperator = styled.div<{ transparent: boolean }>`
  background-color: ${(props) =>
    props.transparent ? "transparent" : "#f1f3f6"};
  height: 0.1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

SeperatorLine.defaultProps = {
  transparent: false,
};
