import Navbar from '../../comps/Navbar';
import Footer from '../../comps/Footer';
import styles from '../../styles/Blog.module.css'
import Link from 'next/link';

export default function Home() {


  return (
    <>
      <Navbar />
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>
            Sometimes I write about the things I'm learning
          </h2>
        </div>
        <div className={styles.card}>
          <p>
            One of the things I love about the developer community is how willing everyone is to help
            each other out. There is no way I can ever pay back the countless hours other engineers have spent
            developing free resources. If I share my experiences, maybe I can help inspire the next generation
            of developers.
          </p>
        </div>
      </div>

      <div>
        <ul>
          <li>
            <Link href="/blog/1">
              <a>Blog 1</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/2">
              <a>Blog 2</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/3">
              <a>Blog 3</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/4">
              <a>Blog 4</a>
            </Link>
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
}