// Base URL for the API, loaded from environment variables for flexibility
const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

// Helper function to make API requests
// This centralizes the logic for making fetch requests to the API
const makeAPIRequest = async (endpoint, accessToken) => {
  // Construct the full URL for the request
  const url = `${apiBaseURL}${endpoint}`;

  // Perform the fetch request
  const response = await fetch(url, {
    method: 'GET', // HTTP method
    headers: {
      'Content-Type': 'application/json', // Setting content type as JSON
      'x-access-token': accessToken // Including the access token in the request header
    }
  });

  // Error handling if the response status is not OK
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Parsing the JSON response
  return response.json();
};

// Function to fetch a list of movies for a given world (filmworld or cinemaworld)
export const fetchMovies = async (world) => {
  // Retrieve the API access token from environment variables
  const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
  // Use the helper function to make the request
  return makeAPIRequest(`/${world}/movies`, accessToken);
};

// Function to fetch details of a specific movie by its ID and world
export const fetchMovieDetails = async (world, id) => {
  // Retrieve the API access token from environment variables
  const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
  // Use the helper function to make the request
  return makeAPIRequest(`/${world}/movie/${id}`, accessToken);
};
