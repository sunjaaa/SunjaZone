import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  posted?: boolean;
};

const CoverImage = ({ title, src, slug, posted }: Props) => {
  const image = posted ? (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={768}
      height={320}
      priority
    />
  ) : (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={320}
      height={165}
      priority
    />
  );

  return (
    <>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default CoverImage;
