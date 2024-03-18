import React, { useEffect, useState } from "react";

export default function Ex1() {
  const [posts, setPosts] = useState([]);
  const fakeposts = [
    {
      id: 1,
      title: "aaaaaaaaa",
      body: "bbbbbbbbbb",
    },
  ];
  useEffect(() => {
    console.log("컴포넌트 마운트");
    setTimeout(function () {
      setPosts(fakeposts);
    }, 2000);
  }, [fakeposts]);
  return (
    <div>
      {posts.length > 0
        ? posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        : "로딩 중"}
    </div>
  );
}
