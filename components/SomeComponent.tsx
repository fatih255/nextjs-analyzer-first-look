import React, { useEffect, useState } from "react";
import Image from "next/image";
import AnotherComponent from "./AnotherComponent";
import TableComponent from "./TableComponent";

type Props = {};

export default function SomeComponent({}: Props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/user?limit=100", {
      headers: {
        "app-id": "6382103495340244f6bc4800",
      },
    })
      .then((response) => response.json())
      .then(({ data }) => setData(data));
  }, []);

  return (
    <div>
      <TableComponent />
      <AnotherComponent />
      <div>SomeComponent</div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi neque
      sint voluptate distinctio illo, iure atque velit qui eos aliquam
      voluptatem placeat? Voluptates nostrum asperiores autem unde blanditiis
      commodi soluta!
      <div>
        {data &&
          data.map(
            (post: { id: string; firstName: string; picture: string }) => (
              <article key={post.id}>
                <h2>{post.firstName}</h2>
                <Image
                  src={post.picture}
                  alt={post.firstName}
                  width={300}
                  height={300}
                />
              </article>
            )
          )}
      </div>
    </div>
  );
}
