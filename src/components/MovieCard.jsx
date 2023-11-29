import React from 'react';

const MovieCard = ({ movie, onMovieSelect }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
        onClick={onMovieSelect}>
        <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{movie.Title}</h3>
          <p>{movie.Year}</p>
          <p>{movie.Type}</p>
          <p>${movie.Price}</p>
        </div>
      </div>
    );
  };
  

export default MovieCard;
