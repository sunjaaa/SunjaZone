import React from "react";
import styled from "@emotion/styled";

interface Props {
  src: string;
}

const Badge = ({ src }: Props) => {
  return (
    <Picture>
      <img loading="lazy" decoding="async" alt={`${src} badge`} src={src} />
    </Picture>
  );
};

export default Badge;

const Picture = styled.picture`
  margin-right: 0.5%;
`;
