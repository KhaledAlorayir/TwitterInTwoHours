import React from "react";
import { useUserPosts } from "../components/usePosts";
import Post from "../components/Post";

const UserPosts = ({ params }) => {
  const { id } = params;
  const { data, isLoading } = useUserPosts(id);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <section style={{ marginTop: "4rem" }}>
      {" "}
      {data && data.map((p) => <Post p={p} key={p.id} />)}
    </section>
  );
};

export default UserPosts;
