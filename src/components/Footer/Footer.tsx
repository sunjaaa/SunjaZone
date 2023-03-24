import React from "react";
import styled from "@emotion/styled";
import { SiGithub } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

import { INFO } from "@/constants/constant";
import { content } from "@/constants/index";

const Footer = () => {
  const openGithubPage = () => {
    window.open(INFO.GITHUB);
  };
  const copyEmail = () => {
    const $textarea = document.createElement("textarea");
    document.body.appendChild($textarea);
    $textarea.value = INFO.EMAIL;
    $textarea.select();
    document.execCommand("copy");
    document.body.removeChild($textarea);
    alert("이메일이 복사되었습니다!");
  };

  return (
    <Container>
      <Wrapper>
        <WebName>SUNJAZONE</WebName>
        <Box>
          <IconWrapper>
            <IconBox>
              <SiGithub size={14} onClick={openGithubPage} />
            </IconBox>
            <IconBox>
              <HiOutlineMail size={16} onClick={copyEmail} />
            </IconBox>
          </IconWrapper>
          <CopyRightText>© 2023 Sunjae, Lee.</CopyRightText>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex: 1;
  margin-left: 28%;
  margin-right: 28%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IconWrapper = styled.div`
  display: flex;
  width: 5%;
  justify-content: space-between;
  cursor: pointer;
`;
const IconBox = styled.a`
  &:hover {
    color: ${content.primary.common};
  }
`;

const CopyRightText = styled.p`
  font-size: 14px;
  color: ${content.gray.a3};
  font-weight: 400;
`;

const WebName = styled.p`
  font-size: 16px;
  color: ${content.gray.a2};
  font-weight: 700;
`;
