import Image from 'next/image';
import Head from 'next/head';

import About from '../comps/About';
import Contact from '../comps/Contact';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import Portfolio from '../comps/Portfolio';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Paglione - Software Engineer</title>
        <meta name='description' content='Connecticut-based full-stack software engineer' />
        <meta name="keywords" content='software, engineer, developer, python, javascript, nextjs, react, express, node, sql, flask' />
      </Head>
      <Navbar />
      <div className='container-fluid home my-5'>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-sm-12 col-md-4 text-start mx-5">
            <h1 className='mb-3'>Hi, I&apos;m Michael</h1>
            <h3 className='mb-5'>Fullstack Software Engineer</h3>
            <p>Hello, I&apos;m thrilled you made it to my website! I am a Fullstack Engineer that embraces innovative and creative software solutions. I greatly value human connection and learning.</p>

            <a id="contact-btn" className="btn" href="#contact">Let&apos;s get in touch!</a>

            <a href="/paglione_resume_10_22_22.pdf"
              download
              role="button"><FontAwesomeIcon icon={faFileLines} /></a>
            <a href="https://www.linkedin.com/in/michael-paglione"
              target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/pagman77"
              target="blank"><FontAwesomeIcon icon={faGithub} /></a>

          </div>
          <div className="col-sm-12 col-md-4 text-center mx-5">
            <Image className="headshot" src="/family.jpg" alt="Photo of Michael" width={960} height={948} />
          </div>
        </div>
      </div>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
