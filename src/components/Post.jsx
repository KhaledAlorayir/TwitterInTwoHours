import React from "react";
import dayjs from "dayjs";
import relativetime from "dayjs/plugin/relativeTime";
import { auth } from "../Firebase";
import { Link } from "wouter";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDeletePost } from "../components/usePosts";
dayjs.extend(relativetime);

const Post = ({ p }) => {
  const [user] = useAuthState(auth);
  const { mutate } = useDeletePost();
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1rem",
        padding: "0.5rem",
        border: "1px solid black",
        borderRadius: "0.5rem",
      }}
    >
      <div style={{ flex: 1 }}>
        {p.uid === user?.uid ? (
          <h6>{p.uname}</h6>
        ) : (
          <Link href={"/user/" + p.uid}>{p.uname}</Link>
        )}
        <h5>{p.post}</h5>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        {p.uid === user?.uid && (
          <button onClick={() => mutate({ id: p.id })}>Delete 💣</button>
        )}
        <p>{dayjs(p.date).fromNow()}</p>
      </div>
    </div>
  );
};

export default Post;
