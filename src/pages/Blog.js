import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import PostPreview from '../components/Blogs/PostPreview';
import data from '../data/blogs/posts';

const Blog = () => (
  <Main title="Blog" description="Learn about Chris Kornosky's Blog.">
    <article className="post" id="Blog">
      <header>
        <div className="title">
          <h2>
            <Link to="/blog">Blogs</Link>
          </h2>
          <p>Blogs documenting various skills and knowledge I&apos;d like to share.</p>
        </div>
      </header>
      {data.map((post) => (
        <PostPreview data={post} key={post.title} />
      ))}
    </article>
  </Main>
);

export default Blog;
