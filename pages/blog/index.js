import Navbar from '../../comps/Navbar';
import Footer from '../../comps/Footer';

export default function Home() {


  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5 pt-5 mb-5 pb-5">
        <div className="row d-flex w-100 justify-content-center align-items-center">
          <div className="col-md-5 text-center text-lg-start mt-2 pt-2">
            <h2>
              <div className="display-6">Sometimes I write about the things I'm learning</div>
            </h2>
          </div>
          <div className="col-md-5 text-center text-lg-end mt-2">
            <p>
              One of the things I love about the developer community is how willing everyone is to help
              each other out. There is no way I can ever pay back the countless hours other engineers have spent
              developing free resources. If I share my experiences, maybe I can help inspire the next generation
              of developers.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}