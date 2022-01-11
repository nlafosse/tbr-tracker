import React from "react";
import Book from "./Book";

const BookList = ({ books, setBooks }) => {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            books={books}
            setBooks={setBooks}
            text={book.text}
            book={book}
            key={book.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
