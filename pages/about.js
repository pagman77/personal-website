import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';

export default function aboutMe() {
  return (
    <>
      <Navbar />
      <div className="container-fluid my-5 about">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-sm-12 col-md-4 mx-4">
            <h2>
              Hi, my name is Michael, and I love solving problems
            </h2>
          </div>
          <div className="col-sm-12 col-md-4 mx-4">
            <p>
              After years of retail and getting burned out, I decided that it was time for a change.
              As a trained musician, I found that there are a lot of paralells between learning an instrument
              and learning a programming language. I am currently attending&nbsp;
              <a href="http://www.rithmschool.com" target="blank">Rithm School</a>
              &nbsp;to hone my skills in full-stack web development.
            </p>
          </div>
          <div className="col-12 text-center my-5">
            <p><a href="../public/paglione_resume.pdf" download role="button">Download my resume here.</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}