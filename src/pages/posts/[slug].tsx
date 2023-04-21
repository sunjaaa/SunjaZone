import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getPostBySlug, getAllPosts } from "@/lib/api";
import Head from "next/head";
import { CMS } from "@/constants/constant";
import markdownToHtml from "@/lib/markdownToHtml";
import PostHeader from "@/components/Post/components/post-header";
import PostBody from "@/components/Post/components/post-body";
import styled from "@emotion/styled";

interface Props {
  post: Post;
  morePosts: Post[];
  preview?: boolean;
}

interface Post {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  type: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
}

const Post = ({ post }: Props) => {
  const router = useRouter();
  const title = `${post.title} | Blog SunjaZone ${CMS.NAME}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return router.isFallback ? (
    <h1>Loading…</h1>
  ) : (
    <>
      <Container>
        <Wrapper>
          <Box>
            <Head>
              <title>{title}</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
            />
            <PostBody content={post.content} />
          </Box>
        </Wrapper>
      </Container>
    </>
  );
};

export default Post;

const Container = styled.article`
  display: flex;
  flex: 1;
  width: 100vw;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
`;

const Box = styled.div`
  margin: 0 1rem 0 1rem;
`;

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "type",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
