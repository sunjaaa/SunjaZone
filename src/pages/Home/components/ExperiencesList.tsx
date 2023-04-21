import React from "react";
import { useRouter } from "next/router";

import Icon from "@/components/Icon";
import LargeItem from "@/components/LargeItem";
import { NAV } from "@/constants";
import { HomeDataItems } from "@/types/home";
import { helper } from "@/utils";

const ExperiencesList = ({ experience = {} as HomeDataItems }) => {
  const router = useRouter();

  const moveToProject = (id: string) => () => {
    router.push(NAV.HREF.PROJECT);
    setTimeout(() => helper.handleClickScroll(id), 400);
  };

  const {
    icon = "",
    title = "",
    subtitle = "",
    description = "",
    duration = "",
    id = "",
  } = experience;

  return (
    <LargeItem
      icon={icon && <Icon icon={icon} size={20} />}
      title={title}
      subtitle={subtitle}
      description={description}
      duration={duration}
      onClick={moveToProject(id)}
    />
  );
};

export default ExperiencesList;
