// import { useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Script from 'next/script';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import { ICON_URL } from '../misc/icons';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" />
      <link rel='stylesheet' href={ICON_URL} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
