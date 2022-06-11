import Navbar from '../../comps/Navbar';
import Footer from '../../comps/Footer';
import Link from 'next/link';

export default function Home() {

  return (
    <div id='page-container'>
      <Navbar />
      <div id="wrap" style={{ marginTop: 120 }} className="container-fluid blog">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-12 col-md-4 mx-4">
            <h2>
              Sometimes I write about the things I&apos;m learning
            </h2>
          </div>
          <div className="col-sm-12 col-md-4 mx-4">
            <p>
              One of the things I love about the developer community is how willing everyone is to help
              each other out. There is no way I can ever pay back the countless hours other engineers have spent
              developing free resources. If I share my experiences, maybe I can help inspire the next generation
              of developers.
            </p>
          </div>
          <div className="col-12 text-center my-5">
            <Link href="/blog/1">
              <a>3/6/22 - The Day Before Rithm</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

