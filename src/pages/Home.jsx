import React from "react";
import { usePosts } from "../components/usePosts";
import Post from "../components/Post";

const Home = () => {
  const { data, isLoading } = usePosts();

  if (isLoading) {
    return <p>...Loading</p>;
  }
  return <main> {data && data.map((p) => <Post p={p} key={p.id} />)}</main>;
};

export default Home;
