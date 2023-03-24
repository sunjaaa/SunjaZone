import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  src: string;
}

const Badge = ({ src }: Props) => {
  return (
    <Picture>
      <Image loading="lazy" decoding="async" alt="JavaScript badge" src={src} />
    </Picture>
  );
};

export default Badge;

const Picture = styled.picture`
  margin-right: 0.5%;
`;
