import React, { useContext, useEffect } from "react";
import { StateContext } from "./ErrorContext";
import { SigninWithGoogle, Signout, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "wouter";

const NavBar = () => {
  const [user, loading, err] = useAuthState(auth);
  const { Error, setError } = useContext(StateContext);

  const AuthHandler = () => {
    if (!loading) {
      if (user) {
        Signout();
      } else {
        SigninWithGoogle();
      }
    }
  };

  useEffect(() => {
    if (err) {
      setError(err.message);
    }
  }, [err]);

  return (
    <>
      {!loading && (
        <>
          <h3 style={{ textAlign: "center", marginTop: "1rem" }}>
            <Link href="/">TwitterInTwoHours 🧠 </Link>
          </h3>
          <nav>
            <h4>
              <Link href="/me"> {user ? user.displayName : ""}</Link>
            </h4>
            <button onClick={AuthHandler}>
              {user ? "Logout" : "Sign in with G"}
            </button>
          </nav>
        </>
      )}
    </>
  );
};

export default NavBar;
