export interface HomeDataItems {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
}

export interface ProjectData {
  title: string;
  data: HomeDataItems[];
}
