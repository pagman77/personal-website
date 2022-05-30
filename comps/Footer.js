import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <span className={styles.copy}>&copy;&nbsp;<small>2022 Michael Paglione</small></span>
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
        </div>
      </div>
    </footer>
  );
}