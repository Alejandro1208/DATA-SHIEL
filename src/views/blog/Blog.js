import React from 'react';
import BannerMedio from '../../componentes/bannerMedio/BannerMedio';
import data from './data';
import backgroundImage from '../../images/banner-medio.jpeg';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog">
      <BannerMedio texto="BLOG" backgroundImage={backgroundImage} />
      <div className="blog-container">
        {data.map(post => (
          <div key={post.id} className="post">
            <div
              className="post-image"
              style={{ backgroundImage: `url(${post.image})` }}
            ></div>
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{post.content}</p>
              <p className="post-date">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
