import { app } from "@/recoils";
import { useRecoilState } from "recoil";
import { listHomeData } from "@/pages/api/stores";

export const useHomes = () => {
  const [homes, setHomes] = useRecoilState(app.homes.atomHomes);

  const getHomes = async (): Promise<void> => {
    const result = await fetchHomes();
    setHomes(result);
  };

  const fetchHomes = async () => {
    const response = await listHomeData();
    return response;
  };

  return [homes, getHomes];
};
