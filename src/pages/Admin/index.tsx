import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { login } from "../api/login";
import { content, NAV } from "@/constants";
import BlockText from "@/components/BlockText";

const AdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const router = useRouter();

  const moveToPostPage = () => {
    router.push(NAV.HREF.POST);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    // const isSuccess = await login(username, password);
    const isSuccess = true;
    setIsLoading(false);
    if (isSuccess) {
      moveToPostPage();
    } else {
      setErrorMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <TitleBox>
            <BlockText title="관리자 로그인" thema={true} size={1.4} />
          </TitleBox>
          <InputText>아이디</InputText>
          <LoginInput
            type="text"
            value={username}
            placeholder="아이디를 입력하세요."
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputText>비밀번호</InputText>
          <LoginInput
            type="password"
            value={password}
            placeholder="비밀번호를 입력하세요."
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "로그인 중..." : "로그인"}
          </LoginButton>
        </Box>
      </Wrapper>
      <AlertBox>{errorMessage && <p>{errorMessage}</p>}</AlertBox>
    </Container>
  );
};

export default AdminPage;

const TitleStyle = {
  margin: `0.4rem 2.5rem 0.4rem 2.5rem`,
};

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border: solid;
  height: 30%;
  width: 20%;
  border-radius: 0.75rem;
`;

const AlertBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
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
