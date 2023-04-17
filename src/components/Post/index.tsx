import React from "react";
import MoreStories from "./components/more-stories";
import { PostData } from "@/types/post";

interface Props {
  allPosts: PostData[];
  postType: string;
}

const Post = ({ allPosts, postType }: Props) => {
  const postsType = allPosts.filter((item) => item.type === postType);

  return <MoreStories PostType={postType} posts={postsType} />;
};

export default Post;
