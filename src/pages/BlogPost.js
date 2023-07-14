import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import Main from '../layouts/Main';

const BlogPost = () => {
  const [blogContent, setBlogContent] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const response = await fetch(`/blog/${slug}.md`);
        // eslint-disable-next-line no-console
        console.log(`/blogs/${slug}.md`);
        const markdown = await response.text();
        setBlogContent(markdown);
      } catch (error) {
        console.error('Error fetching blog content:', error);
      }
    };

    fetchBlogContent();
  }, [slug]);

  return (
    <Main title="Blog" description="Learn about Chris Kornosky's Blog.">
      <div className="blog-post">
        <h2>{slug.split('-').slice(3).join(' ')}</h2>
        <ReactMarkdown>{blogContent}</ReactMarkdown>
      </div>
    </Main>
  );
};

export default BlogPost;
