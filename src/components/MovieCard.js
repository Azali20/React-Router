import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, description, posterURL, rating, trailerLink }) => {
  return (
    <div style={{background: 'linear-gradient(to left, #cc5520, skyblue)'}}>
          <Link to={`/movies/${encodeURIComponent(title)}`} trailerLink={trailerLink}>
          <img
              style={{ height: 250, width: 250, padding: 20 }}
              src={posterURL}
              alt={title}
            />
            <h3 style={{ color: '#cc5500' }}>{title}</h3>
          </Link>
          <p style= {{color:'#1f2937'}}>{description}</p>
          <span>Rating: {rating}</span>
    </div>
  );
};

export default MovieCard;
