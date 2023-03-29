import SectionList from "@/components/SectionList";
import React from "react";
const DATA = [
  {
    title: "Work Experiences",
    data: [
      {
        id: "section-1",
        icon: "cloudfare",
        title: "Karos",
        subtitle: "JIIN",
        description: "React를 활용한 .... ........... 개발",
        duration: "Nov 2022 ~ Jan 2023",
      },
      {
        id: "section-2",
        icon: "zoom",
        title: "Whatssub-Lite",
        subtitle: "Whatssub Internships",
        description: "React-Native를 활용한 애플리케이션 개발",
        duration: "Nov 2022 ~ Jan 2023",
      },
    ],
  },
  {
    title: "Personal Experience",
    data: [
      {
        id: "section-3",
        icon: "zoom",
        title: "Target-Search",
        subtitle: "Search your targets!",
        description:
          "스크랩핑로직 구현과 express로 만든 API로 react-typescript를 프론트로 사용하여 검색사이트 구현",
        duration: "Mar 2023",
      },
      {
        id: "section-4",
        icon: "zoom",
        title: "Sunja-Zone",
        subtitle: "Sunjaaa's website",
        description: "NextJS를 활용한 웹사이트 개발",
        duration: "Mar 2023 ~",
      },
    ],
  },
];

interface SectionListItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
}

const Blog = () => {
  return <div>blogggg</div>;
};

export default Blog;
