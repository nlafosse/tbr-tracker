import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import BookList from "./components/BookList";

function App() {
  const [inputText, setInputText] = useState("");
  const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>TBR randomizer</h1>
      </header>
      <Form
        books={books}
        setBooks={setBooks}
        inputText={inputText}
        setInputText={setInputText}
      />
      <BookList books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
