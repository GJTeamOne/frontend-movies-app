# Movie Selection Platform (Frontend)

## Project Overview

This project is a frontend application for a movie selection platform. It allows users to choose between different movie worlds, view a list of movies with their respective price, arranged from starting with the cheapest movie price, and get detailed information about each movie in a modal view, similar to popular streaming services. The application is built with React and TailwindCSS for styling.

## Features

- World Selection: Users can select between different movie worlds.

- Movie List: Displays a list of movies from the selected world with the cheapest movie to buy first in order.

- Movie Details: Clicking on a movie card opens a modal with more detailed information about the movie.

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

### Clone the Repository

Clone the project repository by running the following command:

git clone [repository URL]

Navigate to the project directory:

cd [local repository]

### Install Dependencies

Install all the required packages using npm:

npm install

### Set Up Environment Variables

Create a `.env` file in the root of the project and specify your API base URL and API access token:

VITE_API_BASE_URL=[your API base URL]

VITE_API_ACCESS_TOKEN=[your API access token]

Replace [your API base URL] and [your API access token] with the actual values.

### Start the Development Server

Launch the development server with:

npm run dev