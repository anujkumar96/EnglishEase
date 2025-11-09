import { Container, Row, Col, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";         

export default function Footer() {
  const year = new Date().getFullYear();

  const socialIcons = [
    { icon: <FaFacebook />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaGithub />, link: "https://github.com" },
  ];

  return (
    <motion.footer
      className="pt-5 text-white position-relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0b1424 0%, #070c16 100%)",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated gradient glow bar */}
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: "4px",
          background:
            "linear-gradient(90deg, #3DFF6D, #00BFFF, #3DFF6D, #00BFFF)",
          backgroundSize: "300% 100%",
          animation: "moveGradient 6s linear infinite",
        }}
      ></div>

      <Container>
        <Row className="gy-4 text-center text-md-start">
          {/* Brand Section */}
          <Col md={3}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <LinkContainer to="/">
                <Navbar.Brand
                  className="fw-bold text-light fs-4"
                  style={{ cursor: "pointer" }}
                >
                  EnglishEase<span style={{ color: "#3DFF6D" }}>Innovations</span>
                </Navbar.Brand>
              </LinkContainer>

              <p className="mt-3 small text-secondary mb-0">
                Think Technology, Think Us
              </p>
            </motion.div>
          </Col>

          {/* Company Links */}
          <Col md={3}>
            <h6 className="fw-bold mb-3 text-uppercase text-light">Company</h6>
            <ul className="list-unstyled small">
              <LinkContainer to="/about">
                <motion.li
                  whileHover={{ x: 6, color: "#3DFF6D" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-2 text-secondary"
                  style={{ cursor: "pointer" }}
                >
                  About
                </motion.li>
              </LinkContainer>

              <LinkContainer to="/blog">
                <motion.li
                  whileHover={{ x: 6, color: "#3DFF6D" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-2 text-secondary"
                  style={{ cursor: "pointer" }}
                >
                  Blog
                </motion.li>
              </LinkContainer>

              <LinkContainer to="/get-in-touch">
                <motion.li
                  whileHover={{ x: 6, color: "#3DFF6D" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-2 text-secondary"
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </motion.li>
              </LinkContainer>
            </ul>
          </Col>

          {/* Explore Links */}
          <Col md={3}>
            <h6 className="fw-bold mb-3 text-uppercase text-light">Explore</h6>
            <ul className="list-unstyled small">
              <LinkContainer to="/services">
                <motion.li
                  whileHover={{ x: 6, color: "#3DFF6D" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-2 text-secondary"
                  style={{ cursor: "pointer" }}
                >
                  Services
                </motion.li>
              </LinkContainer>

              <LinkContainer to="/portfolio">
                <motion.li
                  whileHover={{ x: 6, color: "#3DFF6D" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-2 text-secondary"
                  style={{ cursor: "pointer" }}
                >
                  Portfolio
                </motion.li>
              </LinkContainer>

              <LinkContainer to="/get-in-touch">
                <motion.li
                  whileHover={{ x: 6, color: "#3DFF6D" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-2 text-secondary"
                  style={{ cursor: "pointer" }}
                >
                  Products
                </motion.li>
              </LinkContainer>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h6 className="fw-bold mb-3 text-uppercase text-light">Contact Us</h6>
            <motion.p
              whileHover={{ scale: 1.05, color: "#3DFF6D" }}
              className="small mb-1 text-secondary"
            >
              📞 +1 (707) 634-4544
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05, color: "#3DFF6D" }}
              className="small mb-0 text-secondary"
            >
              ✉️ connect@englishease.com
            </motion.p>
          </Col>
        </Row>

        {/* Social Icons */}
        <motion.div
          className="d-flex justify-content-center mt-4 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {socialIcons.map((s, idx) => (
            <motion.a
              key={idx}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                rotate: 8,
                color: "#3DFF6D",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="fs-4 text-secondary"
              style={{ textDecoration: "none" }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        <hr className="border-secondary my-4" />

        <motion.div
          className="text-center small text-secondary pb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          © {year}{" "}
          <span className="text-light fw-semibold">
            EnglishEase Innovations
          </span>
          . All Rights Reserved.
        </motion.div>
      </Container>

      <style>{`
        @keyframes moveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.footer>
  );
}
