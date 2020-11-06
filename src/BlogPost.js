import React from "react";
import Skeleton from "react-loading-skeleton";

export default function BlogPost({ title, body, subTitle }) {
  return (
    <div>
      <h1>{title || <Skeleton />}</h1>
      <h3>{subTitle || <Skeleton />}</h3>

      <p>{body || <Skeleton count={6} />}</p>

      <button>
        {body ? "Read more" : <Skeleton height={20} width={150} />}
      </button>
    </div>
  );
}
