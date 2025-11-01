import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get all posts
export const getPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};

// get a single post by id
export const getPost = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};

// get all users (author info)
export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

// get comments for a specific post
export const getComments = async (postId) => {
  const res = await api.get("/comments", { params: { postId } });
  return res.data;
};

// create a new post
export const createPost = async (payload) => {
  const res = await api.post("/posts", payload);
  return res.data;
};
