import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.photo}>
          <Image className={styles.photo} src="/headshot.png" alt="Photo of Michael" width={175} height={250} />
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>Michael Paglione</h2>
          <p>Full-Stack Engineer</p>
          <p><small>Javascript | ReactJS | Python | Flask</small></p>
        </div>
      </div>
      <Footer />
    </>
  );
}
