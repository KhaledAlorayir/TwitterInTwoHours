import React from "react";
import { useMyPosts } from "./usePosts";
import Post from "./Post";

const MyPosts = () => {
  const { data, isLoading } = useMyPosts();

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <section style={{ marginTop: "5rem" }}>
      {data && data.map((p) => <Post p={p} key={p.id} />)}
    </section>
  );
};

export default MyPosts;
