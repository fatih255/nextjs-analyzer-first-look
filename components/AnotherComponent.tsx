import React from "react";

type Props = {};

export default function AnotherComponent({}: Props) {
  return (
    <div>
      {Array.from({ length: 100 }).map((_, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel
          dolor, dicta, unde beatae sapiente eum odit earum ut sunt aspernatur
          vero hic quibusdam perferendis illo explicabo veritatis. Magni, culpa.
        </p>
      ))}
    </div>
  );
}
