import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  icon: string;
  size?: number;
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

  return (
    <>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={icon}
          width={size}
          height={size}
          placeholder="blur"
        />
      )}
    </>
  );
};

export default Icon;
