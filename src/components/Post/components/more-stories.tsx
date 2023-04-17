import PostPreview from "./post-preview";
import { PostData } from "@/types/post";
import styled from "@emotion/styled";

type Props = {
  posts: PostData[];
  PostType: string;
};

const MoreStories = ({ posts, PostType }: Props) => {
  const postType = {
    blog: "블로그",
    issue: "이슈",
  }[PostType];

  return (
    <Container>
      <PostTypeTitle>{postType}</PostTypeTitle>
      <PostPreviewBox>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            PostType={PostType}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </PostPreviewBox>
    </Container>
  );
};

export default MoreStories;

const Container = styled.section`
  display: flex;
  flex: 1;
  width: 100vw;
  flex-direction: column;
  overflow-y: auto;
`;

const PostTypeTitle = styled.h2`
  font-size: 2rem;
  margin: 2rem 13.6rem 2rem 13.7rem;
`;

const PostPreviewBox = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin: 0 13.6rem 4rem 13.7rem;
`;
