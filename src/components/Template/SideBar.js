import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Chris Kornosky</h2>
        <p>
          <a href="mailto:christopher.kornosky@gmail.com">
            christopher.kornosky@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I&apos;m Christopher Kornosky, a Python Developer with expertise in
        render operations, software development, and visual effects, having led
        teams and delivered exceptional digital content at
        <a href="https://www.ingenuitystudios.com/">Ingenuity Studios</a> and
        Texas A&amp;M University in College Station, TX.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Chris Kornosky <Link to="/">kornosky.site</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
