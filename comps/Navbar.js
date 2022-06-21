import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid mx-5">
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
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>

          <Link href="/blog">
            <a className="nav-link">Blog</a>
          </Link>

          <Link href="/portfolio">
            <a className="nav-link">Portfolio</a>
          </Link>

          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}