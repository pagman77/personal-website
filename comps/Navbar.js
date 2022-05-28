import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <Link className="nav-item" href="/">
          <a className="nav-link text-decoration-none text-light">MP</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
          aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="main-nav">
          <ul className="navbar-nav mx-lg-5 px-lg-5">
            <li className="nav-item mx-2">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/portfolio">
                <a className="nav-link">Portfolio</a>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}