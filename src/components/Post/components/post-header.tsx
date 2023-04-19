import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import styled from "@emotion/styled";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostDate>
        <DateFormatter dateString={date} />
      </PostDate>
      <PostImage>
        <CoverImage title={title} src={coverImage} posted />
      </PostImage>
    </>
  );
};

export default PostHeader;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const PostDate = styled.div`
  margin: -1rem 0 2rem 0;
`;

const PostImage = styled.div`
  margin-bottom: 2rem;
`;
