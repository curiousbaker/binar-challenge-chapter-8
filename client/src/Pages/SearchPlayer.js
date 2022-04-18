import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SearchPlayer({ isSubmitted }) {
  const [inputs, setInputs] = useState({
    keyword: "",
    searchBy: "",
  });
  const [submitted, setSubmitted] = useState(false);
  // if (!isSubmitted) setSubmitted(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // console.log(Object.entries(inputs));
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h1 className="mb-3">Search Player</h1>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="inputKeyword"
              label="Keyword"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Enter keyword"
                name="keyword"
                value={inputs.keyword}
                onChange={handleInputChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="selectSearchBy"
              label="Search by.."
              className="mb-3"
            >
              <Form.Select
                aria-label="Select search category"
                name="searchBy"
                onChange={handleInputChange}
              >
                <option value="">Select options</option>
                <option value="username">Username</option>
                <option value="email">Email</option>
                <option value="experience">Exp. Points</option>
                <option value="level">Level</option>
              </Form.Select>
            </FloatingLabel>

            <Button variant="primary" type="submit" className="btn-lg mb-5">
              Submit
            </Button>
          </Form>
          {submitted && (
            <Card>
              <ListGroup variant="flush">
                {Object.entries(inputs).map((input) => (
                  <ListGroup.Item key={input[0]}>
                    <span className="fw-bold">{input[0]}:</span>{" "}
                    <span className="fst-italic">{input[1]}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}
