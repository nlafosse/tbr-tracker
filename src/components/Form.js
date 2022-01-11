import React from "react";

const Form = ({ inputText, setInputText, books, setBooks }) => {
  const handleInputText = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([
      ...books,
      { text: inputText, completed: false, id: Math.random() * 845 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        onChange={handleInputText}
        value={inputText}
        type="text"
        className="book-input"
      />
      <button onClick={handleSubmit} className="add-button" type="submit">
        Add
      </button>
      <div>
        <select name="books" class="filter-book">
          <option value="all">All</option>
          <option value="unread">To-Read</option>
          <option value="completed">Read</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
