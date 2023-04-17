import styled from "@emotion/styled";

interface Props {
  content: string;
}

const PostBody = ({ content }: Props) => {
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};

export default PostBody;

const Container = styled.div`
  font-size: 1.25rem;
`;
