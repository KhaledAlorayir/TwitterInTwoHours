import React, { useState, useContext } from "react";
import { StateContext } from "../components/ErrorContext";
import { useSubmit } from "./usePosts";

const Form = () => {
  const [input, setInput] = useState("");
  const { mutate } = useSubmit();
  const { setError } = useContext(StateContext);
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "" && input.length <= 280) {
      mutate({ post: input });
      setInput("");
    } else {
      setError(
        "sooo either ur tweet is too big or too small, either way figure it out 🤨"
      );
    }
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            cols="30"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button>Share 🥳 </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
