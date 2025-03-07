# Younglabs Greeting Application

A simple web application that demonstrates client-server interaction using Express.js backend and HTML/JavaScript frontend.

## Overview

This application provides a simple interface where user can:
1. Enter their name in an input field
2. Click a button to send the name to the server
3. Receive and display a personalized greeting message from the server

## Features

- RESTful API endpoint for greeting generation
- Simple, responsive user interface
- Error handling for both client and server
- Clean code structure following best practices

## Project Structure

```
Younglabs assignment/
├── server.js      # Express.js server with API endpoint
├── index.html     # Frontend UI with HTML, CSS, and JavaScript
├── package.json   # Project dependencies
└── README.md      # Project documentation
```

## Technology Stack

- **Backend**: Node.js with Express.js
- **Frontend**: HTML, CSS, Javascript
- **Package Manager**: npm

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/prabhat135/younglabs-greeting.git
   cd younglabs-greeting
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

1. Start the server:
   ```
   node server.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## API Documentation

### GET /api/greet

Returns a greeting message based on the provided name.

**Request Parameters:**
- `name` (query parameter): The name to include in the greeting

**Success Response:**
- Status Code: 200
- Content:
  ```json
  {
    "message": "Hello, YourName! Welcome to Younglabs."
  }
  ```

**Error Response:**
- Status Code: 400
- Content:
  ```json
  {
    "error": "Name is required."
  }
  ```

## Development

To modify the application:
- Edit `server.js` to change the backend functionality.
- Edit `index.html` to modify the frontend appearance.
