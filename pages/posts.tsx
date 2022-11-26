import { GetStaticProps } from "next";
import React from "react";
import Image from "next/image";

type Props = {
  posts?: any[];
};

export default function FetchPostsComponent({ posts = [] }: Props) {

  return (
    <div>
      FetchPostsComponent
      <br />
      {posts.length + " Post Sizes"}
      <br />
      {posts.reverse().map((post) => (
        <article key={post.id}>
          <h2>{post.firstName}</h2>
          <Image
            src={post.picture}
            alt={post.firstName}
            width={300}
            height={300}
          />
        </article>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const getPostsFetch = fetch("https://dummyapi.io/data/v1/user?limit=100", {
    headers: {
      "app-id": "6382103495340244f6bc4800",
    },
  });
  const postsData = (await (await getPostsFetch).json()).data;

  return {
    props: {
      posts: postsData,
    },
    revalidate: 900,
  };
};
