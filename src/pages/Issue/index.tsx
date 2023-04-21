import React from "react";
import Post from "@/components/Post";

import { getAllPosts } from "@/lib/api";

import { PostData } from "@/types/post";

interface Props {
  allPosts: PostData[];
}

const Issue = ({ allPosts }: Props) => {
  return <Post allPosts={allPosts} postType="issue" />;
};

export default Issue;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "type",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
