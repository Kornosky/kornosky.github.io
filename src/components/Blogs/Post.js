import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const PostPreview = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const [loadedPost, setLoadedPost] = useState(null);
  const handleClick = async (event) => {
    const targetElement = event.target;

    if (targetElement.tagName !== 'A') {
      if (loadedPost) {
        // If the post is already loaded, remove it
        setLoadedPost(null);
      } else {
        try {
          const response = await axios.get(data.post);
          setLoadedPost(response.data);
        } catch (error) {
          console.error('Error loading markdown:', error);
        }
      }
    }
  };

  return (
    <div className="cell-container clickable" onClick={handleClick}>
      <div className="cell-container">
        <article className="mini-post">
          <header>
            <h3>
              <a href={data.link}>{data.title}</a>
            </h3>
            <time className="published">
              {dayjs(data.date).format('MMMM, YYYY')}
            </time>
          </header>
          <a href={data.link} className="image">
            <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
          </a>
          <div className="description">
            <p>{data.desc}</p>
          </div>
        </article>
      </div>
      {loadedPost && <ReactMarkdown>{loadedPost}</ReactMarkdown>}
    </div>
  );
};

PostPreview.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPreview;
