export interface HomeDataItems {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
}

export interface HomeDatas {
  title: string;
  data: HomeDataItems[];
}
