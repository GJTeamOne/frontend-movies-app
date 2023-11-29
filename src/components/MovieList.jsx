import React from 'react';
import MovieCard from './MovieCard';

// MovieList component: Renders a list of movies in a grid layout
const MovieList = ({ movies, onMovieSelect, movieWorld }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map(movie => (
        // MovieCard component for each movie
        <MovieCard 
          key={movie.imdbID} 
          movie={movie} 
          // Passing a function to handle movie selection
          onMovieSelect={() => onMovieSelect(movieWorld, movie.imdbID)} 
        />
      ))}
    </div>
  );
};

export default MovieList;
