import React, { useState, useEffect, useRef } from "react";
import WorldSelection from "../components/WorldSelection";
import MovieList from "../components/MovieList";
import { fetchMovies, fetchMovieDetails } from "../utils/api";
import Modal from "../components/Modal";
import background2 from "../assets/background2.png";

// HomePage component: Manages the main page of the application
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedWorld, setSelectedWorld] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const movieListRef = useRef(null);
  
  // Effect to scroll to the movie list when movies are loaded
  useEffect(() => {
    if (movies.length > 0) {
      movieListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [movies]);

  // Function to handle selection of a world and fetch movies from that world
  const handleWorldSelection = async (world) => {
    setLoading(true);
    try {
      const moviesData = await fetchMovies(world);
      setMovies(moviesData);
      setSelectedWorld(world);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle selection of a movie and fetch its details
  const handleMovieSelect = async (world, id) => {
    try {
      const movieDetails = await fetchMovieDetails(world, id);
      setSelectedMovie(movieDetails);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle closing of the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background2})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      {/* World selection component to choose between filmworld or cinemaworld */}
      <WorldSelection
        onSelectWorld={handleWorldSelection}
        selectedWorld={selectedWorld}
      />
      {loading ? (
        <p className="text-center text-white">Loading...</p>
      ) : (
        <div ref={movieListRef}>
          {/* Movie list component to display the fetched movies */}
          <MovieList movies={movies} onMovieSelect={handleMovieSelect} movieWorld={selectedWorld} />
        </div>
      )}
      {/* Modal component for displaying details of the selected movie */}
      <Modal 
        isOpen={isModalOpen} 
        movie={selectedMovie} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default HomePage;
