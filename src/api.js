import { auth, getToken } from "./Firebase";
import axios from "axios";

const base_url = "https://shittytwitter-default-rtdb.firebaseio.com";

// "/post.json?orderBy=\"uid\"&equalTo=\"asdsadsadsadsadsadasds\""

export const getAllPosts = () => {
  const route = `${base_url}/post.json`;
  return axios.get(route);
};

export const getMyPosts = () => {
  const uid = auth.currentUser.uid;
  const route = `${base_url}/post.json?orderBy="uid"&equalTo="${uid}"`;
  return axios.get(route);
};

export const getUserPosts = ({ queryKey }) => {
  const uid = queryKey[1];
  const route = `${base_url}/post.json?orderBy="uid"&equalTo="${uid}"`;
  return axios.get(route);
};

export const submitPost = async ({ post }) => {
  const token = await getToken();
  const uid = auth.currentUser.uid;
  const uname = auth.currentUser.displayName;
  const route = `${base_url}/post.json?auth=${token}`;

  return axios.post(route, {
    date: Date.now(),
    post,
    uid,
    uname,
  });
};

export const DeletePost = async ({ id }) => {
  const token = await getToken();
  const route = `${base_url}/post/${id}.json?auth=${token}`;
  return axios.delete(route);
};
