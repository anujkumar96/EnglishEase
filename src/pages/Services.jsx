import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaComments, FaLaptopCode, FaGlobeAsia } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

export default function Services() {
  const services = [
    {
      title: "Business English Mastery",
      desc: "Develop confidence for meetings, presentations, and negotiations with real-world scenarios and trainer feedback.",
      img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Accent & Pronunciation Training",
      desc: "Master neutral pronunciation and natural intonation through guided voice drills and speech analysis.",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Email & Writing Skills",
      desc: "Learn to write concise, professional, and impactful business communication that makes a great impression.",
      img: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Interview Preparation",
      desc: "Get ready for global job interviews with confidence, strong vocabulary, and authentic responses that impress recruiters.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Grammar & Vocabulary Boost",
      desc: "Enhance your English foundation with fun, interactive sessions to improve accuracy and expression.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Group Conversation Practice",
      desc: "Join friendly discussion circles led by expert mentors to improve fluency and listening skills naturally.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const highlights = [
    {
      icon: <FaChalkboardTeacher size={36} color="#3DFF6D" />,
      title: "Expert Mentors",
      text: "All our trainers are certified English communication experts with global experience.",
    },
    {
      icon: <FaComments size={36} color="#00BFFF" />,
      title: "Interactive Learning",
      text: "Speak, debate, and discuss — no boring lectures, only real communication practice.",
    },
    {
      icon: <FaLaptopCode size={36} color="#3DFF6D" />,
      title: "Smart Technology",
      text: "Learn with AI-based feedback tools and online class modules designed for modern learners.",
    },
    {
      icon: <FaGlobeAsia size={36} color="#00BFFF" />,
      title: "Global Community",
      text: "Join learners from 20+ countries and grow together in our supportive network.",
    },
  ];

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
            transition={{ duration: 0.7 }}
          >
            Explore Our <span style={{ color: "#3DFF6D" }}>Services</span>
          </motion.h1>
          <motion.p
            className="lead text-secondary mt-3"
            style={{ maxWidth: "700px", margin: "auto" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Empower yourself with world-class English learning programs crafted
            for professionals, students, and global achievers.
          </motion.p>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5 text-center bg-light">
        <Container>
          <motion.h2
            className="fw-bold mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Learn With Us
          </motion.h2>

          <Row className="justify-content-center g-4">
            {highlights.map((h, i) => (
              <Col md={3} key={i}>
                <motion.div
                  className="p-4 rounded-4 shadow-sm bg-white"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(61, 255, 109, 0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-3">{h.icon}</div>
                  <h6 className="fw-bold">{h.title}</h6>
                  <p className="text-secondary small">{h.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SERVICES GRID */}
      <section className="py-5 bg-white text-center">
        <Container>
          <motion.h2
            className="fw-bold mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Specialized Courses
          </motion.h2>

          <Row className="g-4 justify-content-center">
            {services.map((srv, i) => (
              <Col key={i} md={4}>
                <motion.div
                  className="service-card p-1 rounded-4 position-relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className="service-inner rounded-4 bg-white shadow-sm">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="img-fluid rounded-top"
                      style={{
                        height: "180px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className="p-4">
                      <h5 className="fw-bold text-dark">{srv.title}</h5>
                      <p className="text-secondary small mb-3">{srv.desc}</p>
                      <Button
                        variant="dark"
                        size="sm"
                        className="rounded-pill px-3"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section
        className="text-center text-white py-5"
        style={{ background: "#0b1424" }}
      >
                  <LinkContainer to="/get-in-touch">

        <Container>
          <motion.h2
            className="fw-bold mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Take the First Step to Confident English Speaking
          </motion.h2>
          <p className="text-secondary mb-4">
            Whether it’s your next job, client, or conversation — we help you
            speak with impact.
          </p>
          <Button
            variant="success"
            className="px-5 py-2 fw-semibold rounded-pill"
          >
            Enroll Now
          </Button>
        </Container>
        </LinkContainer>
      </section>

      {/* ANIMATED BORDER EFFECT */}
      <style>{`
        .service-card {
          position: relative;
          background: linear-gradient(90deg, #3DFF6D, #00BFFF, #3DFF6D, #00BFFF);
          background-size: 300% 300%;
          animation: borderFlow 5s linear infinite;
          padding: 3px;
        }

        .service-inner {
          background: #fff;
          height: 100%;
          overflow: hidden;
          border-radius: 14px;
        }

        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .service-card:hover {
          box-shadow: 0 0 30px rgba(61, 255, 109, 0.4),
                      0 0 50px rgba(0, 191, 255, 0.3);
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
