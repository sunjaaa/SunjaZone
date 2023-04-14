import { content } from "@/constants";
import styled from "@emotion/styled";
import React, { useState } from "react";
import BlockText from "../BlockText";

interface Props {
  children: React.ReactNode;
}

const PopupProvider = ({ children }: Props) => {
  const [popupState, setPopupState] = useState<boolean>(true);

  if (!popupState) {
    return <div>{children}</div>;
  } else {
    return (
      <>
        {/* <Container>
          <Wrapper>
            <Box>
              <TitleBox>
                <BlockText title="Modal" thema={true} size={1.4} />
              </TitleBox>
              <InputText>아이디</InputText>
              <LoginInput type="text" placeholder="아이디를 입력하세요." />
              <InputText>비밀번호</InputText>
              <LoginInput
                type="password"
                placeholder="비밀번호를 입력하세요."
              />
              <LoginButton>123</LoginButton>
            </Box>
          </Wrapper>
        </Container> */}
        <Foo>
          <Noo></Noo>
        </Foo>
        <ChildrenContainer>{children}</ChildrenContainer>
      </>
    );
  }
};

export default PopupProvider;

const Foo = styled.div`
  position: absolute;
  top: 40%;
  bottom: 0;
  left: 50%;
  display: flex;
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100px;
  height: 100px;
`;
const Noo = styled.div`
  display: flex;
  justify-self: center;
  background-color: #09ff00;
  width: 20px;
  height: 20px;
`;

const ChildrenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  opacity: 0.33;
  pointer-events: none;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  opacity: 2.5;
  position: absolute;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: absolute;
  opacity: 1;
  display: flex;
  justify-content: center;
  border: solid;
  height: 30%;
  width: 20%;
  border-radius: 0.75rem;
  background-color: white;
  opacity: 1;
`;

const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const ChildrenBox = styled.div`
  position: absolute;
  opacity: 1;
  width: 100px;
  height: 100px;
  background-color: blue;
`;

const TitleBox = styled.div`
  align-self: center;
  margin: 0.4rem 2.5rem 0.4rem 2.5rem;
`;

const InputText = styled.div`
  margin: 0.4rem 2.5rem 0.4rem 2.5rem;
`;

const LoginInput = styled.input`
  border-width: 0.08rem;
  border-color: ${content.primary.common};
  border-radius: 0.75rem;
  margin: 0 2.5rem 0.4rem 2.5rem;
  padding: 0.7rem 0.5rem 0.7rem 0.5rem;
`;

const LoginButton = styled.button`
  font-weight: bold;
  text-shadow: -0.1rem 0 ${content.gray.a1}, 0 0.1rem ${content.gray.a1},
    0.1rem 0 ${content.gray.a1}, 0 -0.1rem ${content.gray.a1};
  color: white;
  background-color: ${content.primary.common};
  border-width: 0.08rem;
  border-color: white;
  border-radius: 0.75rem;
  margin: 0.7rem 8rem 0.7rem 8rem;
  padding: 0.7rem 1.6rem 0.7rem 1.6rem;
`;
