import Image from 'next/image';
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <div id='page-container'>
      <Head>
        <title>Michael Paglione - Software Engineer</title>
        <meta name='description' content='Connecticut-based full-stack software engineer' />
        <meta name="keywords" content='software, engineer, developer, python, javascript, nextjs, react, express, node, sql, flask' />
      </Head>
      <Navbar />
      <div id="wrap" className="container-fluid mt-5">
        <div className="row d-flex align-items-center justify-content-center">
          <Image className="img-responsive col-sm-12 headshot" src="/headshot.png" alt="Photo of Michael" width={175} height={250} />
          <div className="col-sm-12 text-center my-5">
            <h2 className='display-4'>Michael Paglione</h2>
            <p className='display-6'>Full-Stack Engineer</p>
            <p>Javascript | ReactJS | Python | Flask</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
