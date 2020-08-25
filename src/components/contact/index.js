import React from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <div className="content contact-content">
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="form-name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Put your name..."
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="form-email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                size="lg"
                type="email"
                placeholder="Your email here.."
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="form-message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                rows="6"
                type="textarea"
                placeholder="Then a message here...please."
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
