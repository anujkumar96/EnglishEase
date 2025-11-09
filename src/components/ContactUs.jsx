import { Container, Form, Button } from "react-bootstrap";

export default function ContactUs() {
  return (
    <Container className="bg-light rounded-3 p-5 my-5">
      <h3 className="text-center text-primary mb-4">Get in Touch</h3>
      <Form className="mx-auto" style={{ maxWidth: "500px" }}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={4} placeholder="Your Message" />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">Send Message</Button>
        </div>
      </Form>
    </Container>
  );
}
 
