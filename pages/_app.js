// import { useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Script from 'next/script';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap.js");
  // }, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
