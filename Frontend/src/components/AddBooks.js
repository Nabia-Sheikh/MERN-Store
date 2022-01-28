import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/books/addbook", {
      author,
      title,
    });
    if (res.status === 200) {
      alert("Book added!");
      setTitle("");
      setAuthor("");
    }
    console.log(res);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value = {title}
            placeholder="Enter the Title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>author</Form.Label>
          <Form.Control
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            value = {author}
            placeholder="Author"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>{" "}
    </div>
  );
};

export default AddBook;
