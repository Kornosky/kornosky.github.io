import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostPreview = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const [loadedPost, setLoadedPost] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.get(`${data.post}.md`);
      setLoadedPost(response.data);
    } catch (error) {
      console.error('Error loading markdown:', error);
    }
  };

  return (
    <div className="cell-container clickable" onClick={handleClick}>
      <div className="cell-container">
        <article className="mini-post">
          <header>
            <h3>
              <Link to={`/blog/${data.post}`}>{data.title}</Link>
            </h3>
            <time className="published">
              {dayjs(data.date).format('MMMM, YYYY')}
            </time>
          </header>
          <Link to={`/blog/${data.post}`} className="image">
            <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
          </Link>
          <div className="description">
            <p>{data.desc}</p>
          </div>
        </article>
      </div>
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
