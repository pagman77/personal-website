import { getData } from "../api/blog/posts";
import Navbar from "../../comps/Navbar";

export async function getStaticPaths() {
  const posts = await getData();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = await getData();
  const postId = params.id;
  const post = posts.find(post => post.id === postId);
  return {
    props: {
      post
    },
  };
}

export default function Post({ post }) {

  return (
    <>
      <Navbar />
      <div className="container mx-5">
        <h1 className="mt-2 mb-5">
          {post.date} - {post.title}
        </h1>
        {post.body.map((p, i) => {
          return (
            <p key={i}>{p}</p>
          );
        })}
        <div className="my-5"></div>
      </div>
    </>
  );
}




