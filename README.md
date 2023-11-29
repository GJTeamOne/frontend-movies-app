# Movie Selection Platform (Frontend)

## Project Overview

This project is a frontend application for a movie selection platform. It enables users to choose from various movie worlds and view a list of movies, each with its respective price, sorted to start with the cheapest. Additionally, users can access detailed information about each movie in a modal view, akin to what is offered by popular streaming services. The application is built using React and styled with TailwindCSS.

## Features

- World Selection: Users can select between different movie worlds.

- Movie List: Displays a list of movies from the selected world with the cheapest movie to buy first in order.

- Movie Details: Clicking on a movie card opens a modal with more detailed information about the movie.

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

### Clone the Repository

**Clone the project repository by running the following command**:
```bash
git clone [repository URL]
```

**Navigate to the project directory**:

```bash
cd [local repository]
```

### Install Dependencies

**Install all the required packages using npm**:

```bash
npm install
```

### Set Up Environment Variables

**Create a `.env` file in the root of the project and specify your API base URL and API access token**:
```bash
VITE_API_BASE_URL=[your API base URL]
```

```bash
VITE_API_ACCESS_TOKEN=[your API access token]
```

Replace [your API base URL] and [your API access token] with the actual values.

### Start the Development Server

**Launch the development server with**:
```bash
npm run dev
```
