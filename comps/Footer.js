import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer fixed-bottom" id="footer">
      <div className="container mb-4">
        <div className="row">
          <div id="copy" className="col-lg-6 text-start text-sm-center">
            <span className="fw-light lead">&copy;&nbsp;<small>2022 Michael Paglione</small></span>
          </div>
          <div id="social" className="col-lg-6 btn-group-sm text-end text-sm-center pt-sm-2">
            <a href="https://www.linkedin.com/in/michael-paglione"
              target="blank" className="btn mx-2"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="http://www.twitter.com/dev_michaelp"
              target="blank" className="btn mx-2"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.facebook.com/profile.php?id=9030324"
              target="blank" className="btn mx-2"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://github.com/pagman77"
              target="blank" className="btn mx-2"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://instagram.com/dev_michaelp"
              target="blank" className="btn mx-2"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}