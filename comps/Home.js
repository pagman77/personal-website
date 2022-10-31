import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className='container-fluid home'>
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-12 col-md-4 text-center">
          <h1 className='mb-3'>Hi, I&apos;m Michael</h1>
          <h3 className='mb-5'>Fullstack Software Engineer</h3>
          <p className='mb-4'>Hello, I&apos;m thrilled you made it to my website! I am a Fullstack Engineer that embraces innovative and creative software solutions. I greatly value human connection and learning.</p>
          <div>
            <a id="contact-btn" className="btn mb-3" href="#contact">Let&apos;s get in touch!</a>
            <div className='mb-2'>
              <a href="/paglione_resume_10_29_22.pdf"
                download
                role="button"><FontAwesomeIcon icon={faFileLines} /></a>
              <a href="https://www.linkedin.com/in/michael-paglione"
                target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/pagman77"
                target="blank"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 text-center p-3">
          <Image className="headshot" src="/family.jpg" alt="Photo of Michael" width={960} height={948} />
        </div>
      </div>
    </div>
  );
}
