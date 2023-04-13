import axios, { AxiosResponse } from "axios";

const base = process.env.NEXT_PUBLIC_SERVER_URL;

console.log("base", base);

interface ResponseData {
  success: boolean;
}

export const get = async <T>(
  url: string,
  params: any = {},
  headers: any = {}
): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<ResponseData> = await axios.get(
      `${base}${url}`,
      {
        params,
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
