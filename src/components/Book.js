import React from "react";

const Book = ({ text, book, books, setBooks }) => {
  const handleDelete = () => {
    setBooks(books.filter((item) => item.id !== book.id));
  };

  const handleCompleted = () => {
    setBooks(
      books.map((item) => {
        if (item.id === book.id) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      })
    );
    console.log("BOOKS:", books);
  };

  return (
    <div>
      <li>{text}</li>
      <button onClick={handleCompleted}>Read it!</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Book;
