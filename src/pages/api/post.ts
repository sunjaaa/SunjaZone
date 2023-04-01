import { post } from "./network";
import { PostData } from "./types";

interface Response {
  success: boolean;
}

export const postBlog = async (formData: PostData): Promise<boolean> => {
  const response = await post<Response>("post/blog", {
    formData,
  });
  return response?.success ?? false;
};

export const postIssue = async (formData: PostData): Promise<boolean> => {
  const response = await post<Response>("post/issue", {
    formData,
  });
  return response?.success ?? false;
};
