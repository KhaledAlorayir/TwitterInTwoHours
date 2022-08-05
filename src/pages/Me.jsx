import React, { useEffect } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "wouter";
import Form from "../components/Form";
import MyPosts from "../components/MyPosts";

const Me = () => {
  const [user, loading, err] = useAuthState(auth);
  const [_, setLoc] = useLocation();

  useEffect(() => {
    if (!user && !loading) {
      setLoc("/");
    }
  }, [user]);

  return (
    <>
      {user && (
        <section>
          <Form />
          <MyPosts />
        </section>
      )}
    </>
  );
};

export default Me;
