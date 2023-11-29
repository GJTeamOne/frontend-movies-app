import React from 'react';

// Modal component: Displays detailed information about a movie in a modal window
const Modal = ({ isOpen, movie, onClose }) => {
  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl flex space-x-6 overflow-auto">
        <img src={movie.Poster} alt={movie.Title} className="w-1/3 object-cover rounded-lg"/>
        <div className="w-2/3 space-y-4">
          <h2 className="text-3xl font-bold">{movie.Title} ({movie.Year})</h2>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <div className="flex justify-end">
            <button onClick={onClose} className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition ease-in-out duration-300">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
