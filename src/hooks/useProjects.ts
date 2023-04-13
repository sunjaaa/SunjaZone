import { app } from "@/recoils";
import { useRecoilState } from "recoil";
import { listProjectData } from "@/pages/api/stores";

export const useProjects = () => {
  const [projects, setProjects] = useRecoilState(app.projects.atomProjects);

  const getProjects = async (): Promise<void> => {
    const result = await fetchProjects();
    setProjects(result);
  };

  const fetchProjects = async () => {
    const response = await listProjectData();
    return response;
  };

  return [projects, getProjects];
};
