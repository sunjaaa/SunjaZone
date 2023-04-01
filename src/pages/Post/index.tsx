import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { content, NAV } from "@/constants";

import { useState } from "react";
import { postBlog } from "../api/post";

interface Props {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  path: string;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  postDate: string;
  content: string;
}

const Post = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    path: "",
    title: "",
    description: "",
    coverImage: "",
    category: "",
    postDate: "",
    content: "",
  });

  const router = useRouter();

  const moveToPostPage = () => {
    router.push(NAV.HREF.BLOG);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //모달창 열기

    const isPosted = await postBlog(formData);
    console.log(formData);
    setIsLoading(false);
    if (isPosted) {
      moveToPostPage();
    } else {
      alert("포스팅에 실패하였습니다.");
    }
    // props.onSubmit(formData);
  };

  // 모달창에서 "어느곳에 게시하시겠습니까?" 버튼으로는 블로그 , 이슈 ,취소

  //
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Wrapper onSubmit={handleSubmit}>
        <InputText>제목</InputText>
        <PostInput
          type="text"
          name="title"
          value={formData.title}
          placeholder="제목을 입력해주세요"
          onChange={handleInputChange}
        />

        <InputText>설명</InputText>
        <DescriptionTextArea
          name="description"
          value={formData.description}
          placeholder="설명을 입력해주세요"
          onChange={handleInputChange}
        />

        <InputText>게시일</InputText>
        <PostInput
          type="text"
          name="postDate"
          value={formData.postDate}
          placeholder="YYYY년 MM월 DD일"
          onChange={handleInputChange}
        />

        <InputText>커버 이미지</InputText>
        <PostInput
          type="text"
          name="coverImage"
          value={formData.coverImage}
          placeholder="이미지url을 넣어주세요"
          onChange={handleInputChange}
        />

        <InputText>카태고리</InputText>
        <PostInput
          type="text"
          name="category"
          value={formData.category}
          placeholder="모든 내용을 아우르는 키워드 ex) nextjs"
          onChange={handleInputChange}
        />

        <InputText>경로 생성</InputText>
        <PostInput
          type="text"
          name="path"
          value={formData.path}
          placeholder="/Post/여기올경로에요"
          onChange={handleInputChange}
        />

        <InputText>글 내용</InputText>
        <ContentTextArea
          name="content"
          value={formData.content}
          placeholder="내용을 입력해주세요"
          onChange={handleInputChange}
        />
        <PostButton type="submit">게시하기</PostButton>
        {/* </form> */}
      </Wrapper>
    </Container>
  );
};
export default Post;

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

const Wrapper = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  /* background-color: beige; */
  width: 50rem;
  height: 100%;
  border-radius: 0.55rem;
  line-height: 2rem;
`;

const PostInput = styled.input`
  outline-color: ${content.primary.common};
`;

const PostButton = styled.button`
  font-weight: bold;
  text-shadow: -0.1rem 0 ${content.gray.a1}, 0 0.1rem ${content.gray.a1},
    0.1rem 0 ${content.gray.a1}, 0 -0.1rem ${content.gray.a1};
  color: white;
  background-color: ${content.primary.common};
  border-width: 0.08rem;
  border-color: white;
  border-radius: 0.75rem;
  margin: 0.7rem 20rem 0.7rem 20rem;
  padding: 0.7rem 1.6rem 0.7rem 1.6rem;
  outline-color: ${content.primary.common};
`;

const InputText = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const DescriptionTextArea = styled.textarea`
  outline-color: ${content.primary.common};
`;
const ContentTextArea = styled.textarea`
  outline-color: ${content.primary.common};
  overflow: scroll;
  height: 40rem;
`;
