import React from 'react';
import "../css/book.css" // import the stylesheet

// Define a functional component named BookList
function BookList(props) {
  // Render the component
  return (
    <div>
      {/* Use the map function to loop over each book in the props.books array */}
      {props.books.map(book => (
        // Create a div for each book and set its key to the book's ID
        <div key={book.id} className="book-listing">
          {/* Create a div for the book's info */}
          <div className="book-info">
            {/* Display the book's thumbnail image */}
            <img src={book.imageLinks.thumbnail} alt={book.title} className="book-image" />
            {/* Display the book's description */}
            <p>{book.description}</p> 
          </div>
          {/* Display the book's title */}
          <h2>{book.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default BookList; // Export the component for use in other files
