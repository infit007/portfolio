import { Metadata } from "next";

// TODO: Update metadata

export function constructMetadata({
  title = "Jayesh Suntha", // TODO: Add a custom title
  description = "Computer Science student skilled in C++, Python, full-stack, and AI solutions.", // TODO: Add a custom description
  image = "/thumbnail.png", // TODO: Add a custom image
  icons = "/photo.svg", // TODO: Add a custom icon
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@chrislonzo",
    },
    icons,
    metadataBase: new URL("https://www.chrislonzo.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
