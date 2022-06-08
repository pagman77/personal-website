import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer text-center fixed-bottom my-2">
      <div className='my-2'>
        <a href="https://www.linkedin.com/in/michael-paglione"
          target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="http://www.twitter.com/dev_michaelp"
          target="blank"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.facebook.com/profile.php?id=9030324"
          target="blank"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://github.com/pagman77"
          target="blank"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://instagram.com/dev_michaelp"
          target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <div className='my-3'>
        <span>&copy;&nbsp;<small>2022 Michael Paglione</small></span>
      </div>
    </footer >
  );
}