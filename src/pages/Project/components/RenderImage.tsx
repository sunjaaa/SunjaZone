import { IMAGE_URL, PROJECT } from "@/constants/constant";
import Image from "next/image";
import React from "react";

const RenderImage = ({ title = "" as string }) => {
  if (title === PROJECT.WHATSSUB) {
    return (
      <Image
        src={IMAGE_URL.whatssub}
        alt={`alt_${IMAGE_URL.whatssub}`}
        width={500}
        height={700}
        priority
      />
    );
  }
  if (title === PROJECT.SUNJAZONE) {
    return (
      <Image
        src={IMAGE_URL.sunjazone}
        alt={`alt_${IMAGE_URL.sunjazone}`}
        width={600}
        height={700}
        priority
      />
    );
  }
  if (title === PROJECT.TARGETSEARCH) {
    return (
      <Image
        src={IMAGE_URL.targetSearch}
        alt={`alt_${IMAGE_URL.targetSearch}`}
        width={700}
        height={700}
        priority
      />
    );
  } else {
    return <div>No Image</div>;
  }
};

export default RenderImage;
