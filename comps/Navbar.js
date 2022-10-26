import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="nav-container container-fluid mx-5">
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

      <div id="main-nav" className="collapse navbar-collapse mx-5">
        <div className="navbar-nav">

          <a href="#about" className="nav-link">About</a>
          <a className="nav-link"
            href="/paglione_resume_10_22_22.pdf"
            download
            role="button">Resume</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-link">Contact</a>

        </div>
      </div>
    </nav>
  );
}