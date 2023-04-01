import { post } from "./network";

interface Response {
  success: boolean;
}

export const loginAdmin = async (
  username: string,
  password: string
): Promise<boolean> => {
  const response = await post<Response>("users/login", {
    username,
    password,
  });
  return response?.success ?? false;
};
