import React from 'react';
import filmworldBackground from '../assets/filmworld.png';
import cinemaworldBackground from '../assets/cinemaworld.png';

const WorldSelection = ({ onSelectWorld, selectedWorld }) => {
    return (
      <div className="flex flex-col justify-center items-center h-screen space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Welcome to the Movie Selection</h1>
          <p className="text-xl text-gray-300 mt-4">Find out the cheapest movies available. Choose your world:</p>
        </div>
        <div className="flex space-x-4">
          {/* Filmworld Card */}
          <div
            className={`w-64 h-64 bg-cover bg-center rounded-lg cursor-pointer hover:opacity-75 transition-opacity shadow-2xl hover:scale-105 transform transition-all duration-300 ${
              selectedWorld === 'filmworld' ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
            }`}
            style={{ backgroundImage: `url(${filmworldBackground})` }}
            onClick={() => onSelectWorld('filmworld')}
            role="button"
            aria-label="Select Filmworld"
          >
            <div className="flex justify-center items-center h-full">
              <span className="text-2xl font-bold text-white">Filmworld</span>
            </div>
          </div>
          {/* Cinemaworld Card */}
          <div
            className={`w-64 h-64 bg-cover bg-center rounded-lg cursor-pointer hover:opacity-75 transition-opacity shadow-2xl hover:scale-105 transform transition-all duration-300 ${
              selectedWorld === 'cinemaworld' ? 'ring-4 ring-green-400 ring-opacity-50' : ''
            }`}
            style={{ backgroundImage: `url(${cinemaworldBackground})` }}
            onClick={() => onSelectWorld('cinemaworld')}
            role="button"
            aria-label="Select Cinemaworld"
          >
            <div className="flex justify-center items-center h-full">
              <span className="text-2xl font-bold text-white">Cinemaworld</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WorldSelection;
