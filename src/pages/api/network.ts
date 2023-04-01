import axios, { AxiosResponse } from "axios";

const base = "http://localhost:3001/";

interface ResponseData {
  success: boolean;
}

export const post = async <T>(
  url: string,
  data: any,
  headers: any = {}
): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<ResponseData> = await axios.post(
      `${base}${url}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      }
    );
    return response.data as T;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
