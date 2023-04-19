import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  icon: string;
  size: number;
}

const Icon = ({ icon, size = 100 }: Props) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    import(`@/assets/icons/${icon}.png`)
      .then((module) => {
        setImageSrc(module.default);
      })
      .catch((err) => console.error(err));
  }, [icon]);

  if (icon === "devJeans") {
    return (
      <>
        {imageSrc && (
          <Image
            width={size}
            height={size}
            src={imageSrc}
            alt={`${icon} 데브진스 이미지 입니다.`}
            priority
          />
        )}
      </>
    );
  } else {
    return (
      <>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`${icon} 이미지 입니다.`}
            width={size}
            height={size}
            priority
          />
        )}
      </>
    );
  }
};

export default Icon;
