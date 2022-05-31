import { useRouter } from "next/router";
import { getData } from "../api/blog/posts";
import Navbar from "../../comps/Navbar";
import Footer from "../../comps/Footer";

export default function Post({ posts }) {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find(post => post.id === +id);

  return (
    <>
      <Navbar />
      <div>
        <h1>
          {post.date} - {post.title}
        </h1>
        {post.body.map((p, i) => {
          return (
            <p key={i}>{p}</p>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } }
    ],
    fallback: false
  };
}

export async function getStaticProps() {

  const posts = await getData();

  return {
    props: {
      posts
    },
  };
}


