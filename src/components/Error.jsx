import React, { useContext } from "react";
import { StateContext } from "./ErrorContext";

const Error = () => {
  const { Error, setError } = useContext(StateContext);

  return (
    <>
      {" "}
      {Error && (
        <div className="err">
          <p>{Error}</p>
          <button onClick={() => setError(null)}>Close</button>
        </div>
      )}
    </>
  );
};

export default Error;
