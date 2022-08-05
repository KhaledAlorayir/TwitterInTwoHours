import {
  getMyPosts,
  submitPost,
  getAllPosts,
  getUserPosts,
  DeletePost,
} from "../api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { StateContext } from "./ErrorContext";
import { useContext } from "react";

export const ParsePosts = (data) => {
  const posts = [];
  for (const key in data.data) {
    const post = { ...data.data[key], id: key };
    posts.push(post);
  }
  return posts;
};

export const useMyPosts = () => {
  const { _, setError } = useContext(StateContext);

  return useQuery(["MyPosts"], getMyPosts, {
    select: ParsePosts,
    onError: (err) => {
      setError(err.message);
    },
  });
};

export const useUserPosts = (uid) => {
  const { _, setError } = useContext(StateContext);

  return useQuery(["Posts", uid], getUserPosts, {
    select: ParsePosts,
    onError: (err) => {
      setError(err.message);
    },
  });
};

export const usePosts = () => {
  const { _, setError } = useContext(StateContext);

  return useQuery(["Posts"], getAllPosts, {
    select: ParsePosts,
    onError: (err) => {
      setError(err.message);
    },
  });
};

export const useSubmit = () => {
  const { _, setError } = useContext(StateContext);
  const qc = useQueryClient();
  return useMutation(submitPost, {
    onSuccess: (data) => {
      qc.invalidateQueries(["MyPosts"]);
    },
    onError: (err) => {
      setError(err.message);
    },
  });
};

export const useDeletePost = () => {
  const { _, setError } = useContext(StateContext);
  const qc = useQueryClient();

  return useMutation(DeletePost, {
    onSuccess: (data) => {
      qc.invalidateQueries(["MyPosts"]);
    },
    onError: (err) => {
      setError(err.message);
    },
  });
};
