import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import styled from "@emotion/styled";
import NavLink from "@/components/NavBar/components/NavLink";

interface Props {
  title: string;
  PostType: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
}

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <Container>
      <div>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <TitleBox>
        <NavLink isTrue as={`/posts/${slug}`} href={`/posts/[slug]`}>
          {title}
        </NavLink>
      </TitleBox>
      <DateBox>
        <DateFormatter dateString={date} />
      </DateBox>
      <DescriptionBox>{excerpt}</DescriptionBox>
    </Container>
  );
};

export default PostPreview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 21rem;
  margin: 0 0.5rem 2rem 0.5rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.125rem 0.313rem rgba(0, 0, 0, 0.6);
`;

const TitleBox = styled.div`
  font-size: 1.5rem;
  line-height: 1rem;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
`;

const DateBox = styled.div`
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
`;

const DescriptionBox = styled.div`
  height: 100%;
  font-size: 1rem;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  overflow: hidden;
`;
