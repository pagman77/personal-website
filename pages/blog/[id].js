import { getData } from "../api/blog/posts";
import Navbar from "../../comps/Navbar";
import Footer from "../../comps/Footer";

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
    <div id='page-container'>
      <Navbar />
      <div id="wrap" className="container-fluid w-75">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 mb-5 text-center">
              {post.date} - {post.title}
            </h1>
            {post.body.map((p, i) => {
              return (
                <p key={i}>{p}</p>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}




