import React from "react";
import { useRouter } from "next/router";

import Icon from "@/components/Icon";
import LargeItem from "@/components/LargeItem";
import { NAV } from "@/constants";

const ExperiencesList = ({ experience }: any) => {
  const router = useRouter();

  const moveToProject = (id: any) => () => {
    router.push(NAV.HREF.PROJECT);
    console.log(id);

    setTimeout(() => handleClickScroll(id), 200);
  };

  //  id 다를경우 대응 추가 예정
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <LargeItem
      icon={<Icon icon={experience.icon} size={20} />}
      title={experience.title}
      subtitle={experience.subtitle}
      description={experience.description}
      duration={experience.duration}
      onClick={moveToProject(experience.id)}
    />
  );
};

export default ExperiencesList;
