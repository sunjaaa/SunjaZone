import React from "react";
import styled from "@emotion/styled";
import { content } from "@/constants";

interface Props {
  title: string;
  thema: boolean;
  size: number;
}

const BlockText = ({ title, thema, size }: Props) => {
  return (
    <Container>
      <Title thema={thema} size={size}>
        {title}
      </Title>
    </Container>
  );
};

export default BlockText;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Title = styled.div<{
  thema: boolean;
  size: number;
}>`
  font-size: ${(props) => props.size}rem;
  font-weight: bolder;
  text-shadow: -0.1rem 0 ${content.gray.a1}, 0 0.1rem ${content.gray.a1},
    0.1rem 0 ${content.gray.a1}, 0 -0.1rem ${content.gray.a1};
  color: white;
  ${(props) =>
    props.thema &&
    `
    color: ${content.primary.common};
  `}
`;
