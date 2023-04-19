// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { HomeDatas } from "@/types/home";
import { ProjectDatas } from "@/types/project";
import { get } from "./network";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

export const listHomeData = async () => {
  try {
    const homes: HomeDatas[] | undefined = await get<HomeDatas[]>("api/homes");

    if (homes) {
      return homes;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

export const listProjectData = async () => {
  try {
    const projects: ProjectDatas[] | undefined = await get<ProjectDatas[]>(
      "api/projects"
    );

    if (projects) {
      return projects;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};
