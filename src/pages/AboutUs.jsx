import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { LinkContainer } from "react-router-bootstrap";


export default function AboutUs() {
  return (
    <div style={{ marginTop: "55px", width: "100vw" }}>
      {/* HERO SECTION */}
      <section
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(135deg, #0b1424 0%, #1b2642 100%)",
        }}
      >
        <Container>
          <motion.h1
            className="fw-bold display-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span style={{ color: "#3DFF6D" }}>SpeakFluent</span>
          </motion.h1>
          <motion.p
            className="lead text-secondary mt-3"
            style={{ maxWidth: "700px", margin: "auto" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We’re a passionate team helping people around the world speak English
            with confidence — for work, study, and personal growth.
          </motion.p>
        </Container>
      </section>

      {/* MISSION SECTION */}
      <section className="py-5 text-center bg-light">
        <Container>
          <motion.h2
            className="fw-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.h2>

          <Row className="justify-content-center g-4">
            {[
              {
                title: "Empower Learners",
                text: "We believe English is the key to global opportunity. Our mission is to empower learners to express themselves clearly and confidently.",
                img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Innovative Learning",
                text: "We combine AI tools, interactive lessons, and personalized coaching to make English learning fun, dynamic, and effective.",
                img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Global Community",
                text: "With learners from over 20+ countries, we’re building a community where people learn, connect, and grow together.",
                img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
              },
            ].map((item, i) => (
              <Col key={i} md={4}>
                <motion.div
                  className="position-relative rounded-4 overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  style={{
                    border: "4px solid transparent",
                    background:
                      "linear-gradient(white, white) padding-box, linear-gradient(90deg, #3DFF6D, #00BFFF) border-box",
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, 2, -2, 0],
                    transition: { duration: 0.4 },
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid rounded-top"
                    style={{ height: "220px", width: "100%", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-white rounded-bottom">
                    <h5 className="fw-bold text-dark mb-2">{item.title}</h5>
                    <p className="text-secondary small">{item.text}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* TEAM SECTION */}
      <section
        className="py-5 text-center text-white"
        style={{ background: "#0b1424" }}
      >
        <Container>
          <motion.h2
            className="fw-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>
          <p className="text-secondary mb-5">
            A blend of educators, linguists, and digital creators shaping the
            future of English learning.
          </p>

          <Row className="g-4 justify-content-center">
            {[
              {
                name: "Anjali Verma",
                role: "Founder & Lead Trainer",
                img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Michael Tan",
                role: "Curriculum Designer",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Sophia Liu",
                role: "Communication Coach",
                img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=80",
              },
            ].map((member, i) => (
              <Col key={i} md={4}>
                <motion.div
                  className="rounded-circle mx-auto mb-3 border border-success border-4 position-relative"
                  style={{
                    width: "150px",
                    height: "150px",
                    overflow: "hidden",
                    borderColor: "#3DFF6D",
                    boxShadow: "0 0 15px rgba(61, 255, 109, 0.4)",
                  }}
                  transition={{
                    duration: 12,
                    // repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid rounded-circle"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
                <h5 className="text-white fw-bold">{member.name}</h5>
                <p className="text-secondary small">{member.role}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section
        className="py-5 text-center"
        style={{
          background: "linear-gradient(90deg, #3DFF6D, #00BFFF)",
          color: "#0b1424",
        }}
      >
                  <LinkContainer to="/get-in-touch">
        <Container>
          <motion.h2
            className="fw-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Our Global English Learning Community
          </motion.h2>
          <p className="mb-4 text-dark">
            Improve your speaking skills and connect with learners from around
            the world.
          </p>
          <Button
            variant="dark"
            className="px-5 py-2 fw-semibold rounded-pill"
          >
            Get Started
          </Button>
        </Container>
        </LinkContainer>

      </section>
    </div>
  );
}
