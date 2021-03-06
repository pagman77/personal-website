import Image from 'next/image';
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import Head from 'next/head';

export default function Portfolio() {
  return (
    <div id='page-container'>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />
      <div id="wrap" className='container mt-5'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-12 text-center my-5'>
            <h2>Here are some of the things I&apos;ve been working on...</h2>
          </div>
        </div>
        <div id="portfolioSlide" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {/* JOBLY SLIDE */}
            <div id="jobly" className="carousel-item active text-center mt-3">
              <div className='d-inline-block align-middle'>
                <Image src="/jobly.png" className="img-responsive" alt="Jobly App" height={225} width={375} />
              </div>
              <div className='text-center d-inline-block align-middle mx-2'>
                <h3>Jobly</h3>
                <h5>App for users seeking a job</h5>
                <ul className='text-start'>
                  <li><small>React and Boostrap</small></li>
                  <li><small>Node, Express, SQL, PostgreSQL</small></li>
                  <li><small>Testing with Jest and React Testing Library</small></li>
                  <li><small>Authentication and authorization with bcrypt hashing and JSON web tokens</small></li>
                </ul>
                <p><small>Note: Server is hosted through Heroku, it may take a minute to wake up!</small></p>
                <div className='mb-3'>
                  <button className="project-btn mx-1">
                    <a href="https://high-tax.surge.sh/" target="blank">Project Page</a>
                  </button>
                  <button className="project-btn mx-1">
                    <a href="https://github.com/pagman77/react-jobly" target="blank">Github</a>
                  </button>
                </div>
              </div>
            </div>

            {/* WARBLER SLIDE */}
            <div id="warbler" className="carousel-item text-center mt-3">
              <div className='d-inline-block align-middle'>
                <Image src="/Warbler.png" className="img-responsive" alt="Warbler App" height={225} width={375} />
              </div>
              <div className='text-center d-inline-block align-middle mx-2'>
                <h3>Warbler</h3>
                <h5>Twitter clone to connect with people</h5>
                <ul className='text-start'>
                  <li><small>Python and Flask</small></li>
                  <li><small>SQLAlchemy and PostgreSQL</small></li>
                  <li><small>Testing with Unittest</small></li>
                  <li><small>Authentication and authorization with bcrypt hashing and flask session</small></li>
                </ul>
                <p><small>Note: Server is hosted through Heroku, it may take a minute to wake up!</small></p>
                <div className='mb-3'>
                  <button className="project-btn mx-1">
                    <a href="https://warbler-twclone.herokuapp.com" target="blank">Project Page</a>
                  </button>
                  <button className="project-btn mx-1">
                    <a href="https://github.com/pagman77/warbler" target="blank">Github</a>
                  </button>
                </div>
              </div>
            </div>

            {/* NUMS API SLIDE */}
            <div id="numsapi" className="carousel-item text-center mt-2">
              <div className='d-inline-block align-middle mx-3'>
                <Image src="/nums_api_demo.gif" className="img-responsive rounded-3" alt="NumbersAPI App" height={300} width={150} />
              </div>
              <div className='text-center d-inline-block align-middle'>
                <h3>NumbersAPI</h3>
                <h5>Mobile app based on the API website</h5>
                <ul className='text-start'>
                  <li><small>Javscript and Typescript</small></li>
                  <li><small>React and Ionic</small></li>
                </ul>
                <p><small>Check back soon for a link to the App Store!</small></p>
                <div className='mb-3'>
                  <button className="project-btn mx-1">
                    <a href="http://www.numbersapi.com" target="blank">NumbersAPI Website</a>
                  </button>
                  <button className="project-btn mx-1">
                    <a href="https://github.com/pagman77/nums-api-m" target="blank">Github</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#portfolioSlide" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#portfolioSlide" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}