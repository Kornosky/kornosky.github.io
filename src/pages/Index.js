import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description={"Chris Kornosky's personal website."}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome!</Link>
          </h2>
          <p>
            I&amp;m an experienced technical leader with a passion for render
            operations, software development, and visual effects. Throughout my
            career, I have excelled in fast-paced, deadline-driven environments,
            delivering consistent results. My expertise spans game development,
            visual effects, and leading cross-functional teams while providing
            guidance to emerging talent. I have a continuous thirst for
            learning, always seeking fresh challenges to drive innovation and
            push boundaries. I thrive in collaborative, dynamic settings that
            value creativity, innovation, and a commitment to excellence. I
            would love to be part of your next project!
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
