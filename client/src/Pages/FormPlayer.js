import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FormPlayer({ isSubmitted, formState }) {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    experience: "",
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
          <h1 className="mb-3">{formState} Player Form</h1>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="inputUsername"
              label="Username"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                name="username"
                value={inputs.username}
                onChange={handleInputChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputEmail"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder=""
                name="email"
                value={inputs.email}
                onChange={handleInputChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder=""
                name="password"
                value={inputs.password}
                onChange={handleInputChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputExp"
              label="Experience point"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder=""
                name="experience"
                value={inputs.experience}
                onChange={handleInputChange}
              />
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
