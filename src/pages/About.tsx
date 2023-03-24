import Badge from "../components/Badge/Badge";
import SeperatorLine from "../components/SeperatorLine/SeperatorLine";
import { BADGE } from "../constants/badge";
import React from "react";
import styled from "@emotion/styled";

const About = () => {
  return (
    <Container>
      <div>About</div>
      <SeperatorLine />
      <h1>Interest</h1>
      <BadgeContainer>
        <Badge src={BADGE.JAVASCRIPT} />
        <Badge src={BADGE.TYPESCRIPT} />
        <Badge src={BADGE.REACT} />
        <Badge src={BADGE.REACT_NATIVE} />
        <Badge src={BADGE.EXPRESS} />
      </BadgeContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 28%;
  margin-right: 28%;
`;

const BadgeContainer = styled.picture`
  display: flex;
  align-items: center;
`;
