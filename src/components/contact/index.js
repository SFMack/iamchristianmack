import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");

  const resetForm = (e) => {
    setName("");
    setEmail("");
    setMessage("");
    setSent("");
    buttonText("Send Message");
  };

  const submitForm = (e) => {
    e.preventDefault();

    let data = {
      name,
      email,
      message,
      sent,
      buttonText,
    };

    axios
      .post("http://localhost:8000/api/send", data)
      .then((res) => {
        res.status(200).json({ message: "Success!" });
        // setButtonText("Success!");
        resetForm();
      })
      .catch(() => {
        console.log("Message not sent");
        setButtonText("Message not sent");
      });
  };

  return (
    <div className="content contact-content">
      <Form onSubmit={submitForm}>
        <Row>
          <Col>
            <Form.Group controlId="form-name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                size="lg"
                type="text"
                placeholder="Put your name..."
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="form-email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                size="lg"
                type="email"
                placeholder="Your email here.."
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="form-message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                rows="6"
                type="textarea"
                placeholder="Then a message here...please."
                onChange={(e) => setMessage(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          {buttonText}
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
