import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { LinkContainer } from "react-router-bootstrap";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div style={{ marginTop: "55px", width: "100vw" }}>
      {/* HERO SECTION */}
      <section
        className="text-center text-dark py-5"
        style={{
          background: "linear-gradient(180deg, #f0f4ff 0%, #fff 100%)",
        }}
      >
        <Container>
          <h1 className="fw-bold display-5" data-aos="fade-up">
            Master Business English with Confidence
            <br />
            Speak, Present, and Write Like a Professional
          </h1>
          <p
            className="lead text-secondary mt-3"
            style={{ maxWidth: "700px", margin: "auto" }}
            data-aos="fade-up"
          >
            Learn English for real business situations — meetings, emails,
            presentations, and conversations. Boost your confidence and fluency
            through engaging, practical lessons.
          </p>

          <div className="mt-4" data-aos="zoom-in">
            <Button variant="dark" className="mx-2 px-4 py-2">
              Start Learning
            </Button>
            <Button variant="outline-dark" className="mx-2 px-4 py-2">
              Contact Tutor
            </Button>
          </div>
        </Container>
      </section>

      {/* COURSE CATEGORIES */}
      <section className="py-5 text-center bg-light">
        <Container>
          <h2 className="fw-bold mb-3" data-aos="fade-up">
            Explore Our English Programs
          </h2>
          <p className="text-secondary mb-5" data-aos="fade-up">
            Choose from specialized learning paths designed for professionals,
            students, and global communicators.
          </p>

          <Row xs={1} md={3} className="g-4">
            {[
              {
                title: "Business English",
                img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              },
              {
                title: "Grammar & Vocabulary",
                img: "https://cdn-icons-png.flaticon.com/512/3659/3659890.png",
              },
              {
                title: "Interview & Communication Skills",
                img: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
              },
            ].map((srv, i) => (
              <Col key={i} data-aos="zoom-in">
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="p-4">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      width="80"
                      className="mb-3"
                    />
                    <Card.Title className="fw-bold">{srv.title}</Card.Title>
                    <p className="text-secondary small">
                      Practical lessons, engaging examples, and real-life
                      speaking practice to improve your confidence.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Button variant="dark" className="mt-4 px-4 py-2 rounded-pill">
            View All Courses
          </Button>
        </Container>
      </section>

      {/* LEARNING TOPICS */}
      <section className="py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            What You’ll Learn
          </h2>
          <Row className="justify-content-center g-4" data-aos="fade-up">
            {[
              "Speaking Fluency",
              "Professional Emails",
              "Effective Presentations",
              "Business Meetings",
              "Negotiation Skills",
              "Accent Practice",
              "Grammar Mastery",
              "Vocabulary Building",
            ].map((topic, i) => (
              <Col key={i} xs={6} sm={4} md={3}>
                <motion.div
                  className="p-3 border rounded shadow-sm bg-white"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#e8f9f0",
                    color: "#0b1424",
                  }}
                >
                  {topic}
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* STATISTICS */}
      <section
        className="text-white py-5"
        style={{ background: "#0b1424", textAlign: "center" }}
      >
        <Container>
          <Row>
            {[
              { num: 5000, label: "Students Taught" },
              { num: 120, label: "Corporate Clients" },
              { num: 10, label: "Years of Experience" },
              { num: 98, label: "Satisfaction Rate (%)" },
            ].map((stat, i) => (
              <Col key={i} md={3} sm={6} className="py-3">
                <h2 className="fw-bold display-6 text-success">{stat.num}</h2>
                <p className="text-secondary">{stat.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-5 text-center"
        style={{ background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)" }}
      >
        <Container>
          <motion.h2
            className="fw-bold mb-5"
            data-aos="fade-up"
            style={{ color: "#0b1424" }}
          >
            What Our Learners Say
          </motion.h2>

          <Row className="g-4 justify-content-center gap-3">
            {[
              {
                name: "Rohit Sharma",
                title: "Marketing Manager, India",
                text: "These sessions transformed my communication skills. I now speak confidently in business meetings and client calls!",
                img: "https://cdn-icons-png.flaticon.com/512/4333/4333600.png",
              },
              {
                name: "Lisa Adams",
                title: "Corporate Trainer, UK",
                text: "A perfect blend of practical speaking exercises and grammar refinement. I recommend it to every professional.",
                img: "https://cdn-icons-png.flaticon.com/512/4333/4333603.png",
              },
              {
                name: "Ahmed Khan",
                title: "Student, UAE",
                text: "Amazing teaching style! Every topic feels easy and interactive. My fluency has improved drastically.",
                img: "https://cdn-icons-png.flaticon.com/512/4333/4333605.png",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="testimonial-card bg-dark text-white p-4 rounded-4 shadow-lg col-md-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
                }}
              >
                <motion.img
                  src={review.img}
                  alt={review.name}
                  className="rounded-circle mb-3"
                  width="70"
                  height="70"
                />
                <h6 className="fw-bold text-white">{review.name}</h6>
                <p className="small text-secondary mb-2">{review.title}</p>
                <p className="small">{review.text}</p>
              </motion.div>
            ))}
          </Row>
        </Container>
      </section>

      {/* CALL TO ACTION */}
      <section
        className="text-center text-white py-5"
        style={{ background: "#0b1424" }}
      >
                  <LinkContainer to="/get-in-touch">

        <Container>
          <h2 className="fw-bold mb-3">
            Ready to Speak English Like a Pro?
          </h2>
          <p className="text-secondary mb-4">
            Join our global learners’ community today and start your journey
            toward confident English communication.
          </p>
          <Button
            variant="success"
            className="px-5 py-2 fw-semibold rounded-pill"
          >
            Join Now
          </Button>
        </Container>
        </LinkContainer>
      </section>
    </div>
  );
}
