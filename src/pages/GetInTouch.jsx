import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <div style={{ marginTop: "55px", width: "100vw", overflowX: "hidden" }}>
      {/* HERO SECTION (kept exactly as provided) */}
      <motion.section
        className="text-white py-5 position-relative contact-hero"
        whileHover={{ backgroundPosition: "100% 0" }}
      >
        <Container className="py-5 text-center">
          <motion.h1
            className="fw-bold display-5 mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Get In <span style={{ color: "#3DFF6D" }}>Touch</span>
          </motion.h1>
          <motion.p
            className="lead text-light"
            style={{ maxWidth: "720px", margin: "auto" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Have a question, collaboration idea, or project in mind?  
            Let’s build something remarkable together.
          </motion.p>
        </Container>
      </motion.section>

      {/* CLEAN FULL-FIT FORM SECTION */}
      <section
        style={{
          background: "#f8faff",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 0",
        }}
      >
        <Container style={{ maxWidth: "900px" }}>
          <motion.div
            className="bg-white shadow-lg rounded-4 p-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fw-bold mb-4 text-center text-dark">
              Let’s Start a Conversation
            </h2>
            <Form>
              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Label className="fw-semibold">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label className="fw-semibold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group controlId="phone">
                    <Form.Label className="fw-semibold">Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your contact number"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="subject">
                    <Form.Label className="fw-semibold">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="What’s this about?"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="message" className="mb-4">
                <Form.Label className="fw-semibold">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Tell us more about your project or inquiry..."
                  required
                />
              </Form.Group>

              <div className="text-center mt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-pill px-5 py-2 fw-semibold"
                  style={{
                    backgroundColor: "#00BFFF",
                    border: "none",
                    color: "#fff",
                  }}
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </motion.div>
        </Container>
      </section>

    {/* CONTACT INFO CTA (Refined Look) */}
<section
  className="text-center text-white py-5"
  style={{
    background: "linear-gradient(135deg, #0b1424 0%, #1246A0 60%, #00BFFF 100%)",
    boxShadow: "inset 0 0 60px rgba(0, 191, 255, 0.2)",
  }}
>
  <Container>
    <motion.h4
      className="fw-bold mb-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Prefer Talking Directly?
    </motion.h4>
    <motion.p
      className="text-light mb-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      style={{ fontSize: "1.05rem", opacity: 0.9 }}
    >
      Call us at <strong style={{ color: "#3DFF6D" }}>+91 98765 43210</strong> or write to{" "}
      <strong style={{ color: "#3DFF6D" }}>contact@englishease.in</strong>
    </motion.p>
  </Container>
</section>


      {/* STYLES */}
      <style>{`
        .contact-hero {
          background: linear-gradient(135deg, #0b1424 0%, #1246A0 60%, #00BFFF 100%);
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
          background-size: 200% 200%;
          transition: background-position 1s ease-in-out;
        }

        .contact-hero:hover {
          background-position: 100% 0;
        }

        input, textarea {
          border-radius: 10px !important;
          border: 1px solid #ced4da !important;
          font-size: 0.95rem;
        }

        input:focus, textarea:focus {
          border-color: #00BFFF !important;
          box-shadow: 0 0 0 0.2rem rgba(61, 255, 109, 0.25) !important;
        }

        button:hover {
          background-color: #3DFF6D !important;
          color: #0b1424 !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
