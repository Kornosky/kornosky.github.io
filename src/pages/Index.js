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
            <Link to="/about">Learn about me</Link>, or you can check out {' '}
            <Link to="/stats">bite-sized facts about me</Link>, or{' '}
            <Link to="/contact">contact</Link> me.
          </p>
        </div>
      </header>
      <p>
        I&apos;m an experienced technical leader with a passion for render
        operations, software development, and visual effects. I excell
        in fast-paced, deadline-driven environments,
        delivering consistent results. My expertise spans game development,
        visual effects, and leading cross-functional teams while providing
        guidance to emerging talent. I have a continuous thirst for
        learning, always seeking fresh challenges to drive innovation and
        push boundaries. I thrive in collaborative, dynamic settings that
        value creativity, innovation, and self-improvement.
      </p>
    </article>
  </Main>
);

export default Index;
