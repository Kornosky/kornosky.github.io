import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import PostPreview from '../components/Blogs/Post';
import data from '../data/blogs/posts';

const Blogs = () => (
  <Main title="Blogs" description="Learn about Chris Kornosky's Blogs.">
    <article className="post" id="Blogs">
      <header>
        <div className="title">
          <h2>
            <Link to="/Blogs">Blogs</Link>
          </h2>
          <p>Blogs documenting various skills and knowledge I&apos;d like to share.</p>
        </div>
      </header>
      {data.map((project) => (
        <PostPreview data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Blogs;
