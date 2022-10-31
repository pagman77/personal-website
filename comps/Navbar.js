import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ switchTheme, theme }) {
  return (
    <nav className="navbar navbar-light navbar-expand-lg static-top">
      <div className="nav-container container mx-5">
        <Link href="/">
          <a className="navbar-brand">MP</a>
        </Link>
        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="#main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div id="main-nav" className="collapse mx-5 navbar-collapse text-center">
        <div className="navbar-nav">

          <a href="#about" className="nav-link">About</a>
          <a className="nav-link"
            href="/paglione_resume_10_29_22.pdf"
            download
            role="button">Resume</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-link">Contact</a>
          {theme === "light" && <FontAwesomeIcon className="dark-btn" role="button" onClick={switchTheme} icon={faMoon} />}
          {theme === "dark" && <FontAwesomeIcon className="dark-btn" role="button" onClick={switchTheme} icon={faSun} />}
        </div>
      </div>
    </nav>
  );
}