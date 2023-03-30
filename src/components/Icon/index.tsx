import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  icon: string;
  size: number;
}

const Icon = ({ icon, size }: Props) => {
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
            src="/_next/static/media/devJeans.3aa990f2.png"
            alt="데브진스를 사용한 이미지 배너입니다!"
            priority={true}
          />
        )}
      </>
    );
  } else {
    return (
      <>
        {imageSrc && (
          <Image src={imageSrc} alt={icon} width={size} height={size} />
        )}
      </>
    );
  }
};

export default Icon;
