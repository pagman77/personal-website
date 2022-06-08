import BLOG_POSTS from "./posts.js";

export default async function handler(req, res) {
  const { id } = req.query;

  const post = BLOG_POSTS.find(post => post.id === id);

  res.status(200).json(post);
}