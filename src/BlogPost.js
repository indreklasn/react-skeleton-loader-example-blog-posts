import React from "react";
import Skeleton from "react-loading-skeleton";

const imgUrl =
  "https://cdn-images-1.medium.com/fit/c/50/50/1*Rhzd_aZYgwP2gocFecKi0Q.png";

export default function BlogPost({ title, body, subTitle }) {
  return (
    <div>
      {body ? (
        <img src={imgUrl} width="50px" height="50px" alt="profile" />
      ) : (
        <Skeleton circle={true} height={50} width={50} />
      )}

      <h1>{title || <Skeleton />}</h1>
      <h3>{subTitle || <Skeleton />}</h3>
      <p>{body || <Skeleton count={6} />}</p>

      <button>
        {body ? "Read more" : <Skeleton height={25} width={100} />}
      </button>
    </div>
  );
}
