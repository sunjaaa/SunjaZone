import styled from "@emotion/styled";
import React from "react";
import Banner from "@/components/Banner/Banner";
import CustomItem from "@/components/CustomItem/CustomItem";
import Icon from "@/components/Icon/Icon";

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Banner />
        <div>Main</div>
        <CustomItem
          icon={<Icon icon="cloudfare" size={20} />}
          title="Whatssub-Lite"
          subtitle="Whatssub Internships"
          description="React-Native를 활용한 애플리케이션 개발"
          duration="Nov 2022 ~ Jan 2023"
        />
      </Wrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
`;
