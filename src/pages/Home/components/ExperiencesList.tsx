import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Icon from "@/components/Icon";
import LargeItem from "@/components/LargeItem";
import { NAV } from "@/constants";
import { HomeDataItems } from "../types";
import { helper } from "@/utils";

interface Props {
  experience: HomeDataItems;
}

const ExperiencesList = ({ experience }: Props) => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      helper.handleClickScroll(experience.id);
    };
  }, []);

  const moveToProject = (id: string) => () => {
    router.push(NAV.HREF.PROJECT);
    setTimeout(() => helper.handleClickScroll(id), 200);
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
