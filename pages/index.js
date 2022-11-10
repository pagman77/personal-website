import Head from 'next/head';
import { useState, useEffect } from 'react';

import Home from '../comps/Home';
import About from '../comps/About';
import Contact from '../comps/Contact';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import Portfolio from '../comps/Portfolio';
import ScrollButton from '../comps/ScrollButton';

import { PROJECTS } from '../misc/projects';


export default function Main() {

  const [theme, setTheme] = useState("light");

  /**
   * Toggles theme from dark to light.
   */
  function switchTheme() {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  }
  /**
   * Resets window scroll position.
   */
  function scrollTop() {
    //WEBKIT
    document.body.scrollTop = 0;
    //BLINK/GECKO
    document.documentElement.scrollTop = 0;
  }

  useEffect(function toggleTheme() {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Head>
        <title>Michael Paglione - Software Engineer</title>
        <meta name='description' content='Connecticut-based full-stack software engineer' />
        <meta name="keywords" content='software, engineer, developer, python, javascript, nextjs, react, express, node, sql, flask' />
      </Head>
      <Navbar switchTheme={switchTheme} theme={theme} />
      <Home />
      <About />
      <Portfolio projects={PROJECTS} />
      <Contact />
      <Footer />
      <ScrollButton scrollTop={scrollTop} />
    </>
  );
}
