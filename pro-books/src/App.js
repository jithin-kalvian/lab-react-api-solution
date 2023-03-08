// Importing necessary modules
import React, { useState, useEffect } from 'react'; // Importing React and its hooks
import axios from 'axios'; // Importing Axios library to handle HTTP requests
import BookList from './components/book_list'; // Importing BookList component

// Defining main App component
function App() {
  // Defining state hook for storing books data
  const [books, setBooks] = useState([]);

  // Defining side effect hook for fetching books data on component mount
  useEffect(() => {
    // Sending GET request to the books API endpoint
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: {
        'Authorization': 'whatever-you-want' // Adding authorization header
      }
    })
      .then(response => {
        console.log(response) // Logging the response object
        setBooks(response.data.books); // Setting the books state with response data
      })
      .catch(error => {
        console.log(error); // Logging any error that occurs
      });
  }, []); // Empty dependency array to run the side effect only once on component mount

  // Rendering the App component
  return (
    <div>
      <h1>Book List</h1>
      <BookList books={books} /> {/* Rendering BookList component with books state as prop */}
    </div>
  );
}

export default App; // Exporting the App component for use in other modules

