export interface PostData {
  slug: string;
  title: string;
  type: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
}
