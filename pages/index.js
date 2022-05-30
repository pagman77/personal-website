import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.grid}>
      <Image className={styles.card} src="/headshot.png" alt="Photo of Michael" width={175} height={250}/>
      <div>
        <h2 className={styles.title}>Michael Paglione</h2>
        <p className={styles.desciption}>Full-Stack Engineer</p>
      </div>
      </div>
      <Footer />
    </>
  );
}
