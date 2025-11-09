import { Container, Button, Modal, Form } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Blog() {
  const blogs = [
    {
      title: "Master Fluent English in 30 Days",
      desc: "Discover our expert-backed roadmap to becoming a confident English speaker, one day at a time.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      tag: "Fluency Tips",
    },
    {
      title: "The Science Behind Language Confidence",
      desc: "Explore how psychology and practice routines help break hesitation and boost communication clarity.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      tag: "Confidence Building",
    },
    {
      title: "Accent Neutralization: Myths vs. Reality",
      desc: "Learn how to sound natural—not robotic—while improving pronunciation and accent in global communication.",
      img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=900&q=80",
      tag: "Speaking Skills",
    },
    {
      title: "Grammar Made Simple",
      desc: "We simplify grammar with intuitive examples and conversational context. No boring drills, only clarity!",
      img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80",
      tag: "Grammar",
    },
    {
      title: "Speak Confidently in Public",
      desc: "Tips to overcome stage fear, boost body language, and master clear spoken English delivery.",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
      tag: "Public Speaking",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % blogs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [blogs.length]);

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setShowModal(false);
      setEmail("");
    }, 2000);
  };

  return (
    <div style={{ marginTop: "55px", width: "100vw", overflow: "hidden" }}>
      {/* HERO SECTION */}
      {/* HERO SECTION */}
<motion.section
  className="text-white py-5 position-relative blog-hero"
  whileHover={{ backgroundPosition: "100% 0" }}
>
  <Container className="py-5 text-center">
    <motion.h1
      className="fw-bold display-5 mb-3"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      EnglishEase <span style={{ color: "#3DFF6D" }}>Blog</span>
    </motion.h1>
    <motion.p
      className="lead text-light"
      style={{ maxWidth: "720px", margin: "auto" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      Insights, strategies, and real stories that help you master English
      speaking, grammar, and confident communication.
    </motion.p>
  </Container>

  <style>{`
    .blog-hero {
      background: radial-gradient(circle at 30% 50%, #1246A0 0%, #0b1424 70%);
      clip-path: ellipse(100% 75% at 50% 25%);
      transition: all 1s ease-in-out;
      background-size: 200% 200%;
    }

    .blog-hero:hover {
      background: radial-gradient(circle at 70% 50%, #3DFF6D 0%, #0b1424 70%);
      clip-path: ellipse(110% 80% at 50% 30%);
    }
  `}</style>
</motion.section>

      {/* BLOG LIST */}
      <section
        className="py-5 text-center"
        style={{
          background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 100%)",
        }}
      >
        <Container>
          <motion.h2
            className="fw-bold mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Latest Articles
          </motion.h2>

          <div
            className="d-flex flex-wrap justify-content-center gap-4"
            style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
          >
            {blogs.map((b, i) => (
              <motion.div
                key={i}
                className="blog-card p-1 rounded-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  width: "280px",
                  minHeight: "420px",
                  background:
                    "linear-gradient(90deg, #00BFFF, #3DFF6D, #67E6DC)",
                  backgroundSize: "300% 300%",
                  animation: "borderRun 6s linear infinite",
                  padding: "3px",
                  borderRadius: "16px",
                }}
              >
                <div className="blog-inner rounded-4 bg-white shadow-sm h-100 d-flex flex-column justify-content-between">
                  <div
                    className="position-relative"
                    style={{
                      overflow: "hidden",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  >
                    <motion.img
                      src={b.img}
                      alt={b.title}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      whileHover={{ scale: 1.05 }}
                    />
                    <span
                      className="badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill"
                      style={{
                        background:
                          "linear-gradient(90deg, #00BFFF, #3DFF6D, #67E6DC)",
                        color: "#fff",
                        fontSize: "0.8rem",
                      }}
                    >
                      {b.tag}
                    </span>
                  </div>

                  <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="fw-bold text-dark mb-2">{b.title}</h5>
                      <p className="text-secondary small mb-3">{b.desc}</p>
                    </div>
                    <Button
                      variant="dark"
                      size="sm"
                      className="rounded-pill px-3 mt-auto"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>

        <style>{`
          .blog-inner {
            background: #fff;
            border-radius: 14px;
            overflow: hidden;
            transition: all 0.4s ease;
          }

          .blog-card:hover .blog-inner {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 191, 255, 0.3);
          }

          @keyframes borderRun {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>

{/* CTA SECTION */}
<section
  className="text-center text-white py-5"
  style={{
    background: "linear-gradient(135deg, #0b1424 0%, #1246A0 50%, #00BFFF 100%)",
  }}
>
  <Container>
    <motion.h2
      className="fw-bold mb-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Stay Updated with EnglishEase
    </motion.h2>
    <p
      className="text-light mb-4"
      style={{ maxWidth: "600px", margin: "auto", opacity: 0.9 }}
    >
      Weekly lessons, practical speaking tips, and communication hacks —
      straight to your inbox.
    </p>
    <Button
      variant="light"
      className="px-5 py-2 fw-semibold rounded-pill"
      style={{
        color: "#0b1424",
        boxShadow: "0 4px 12px rgba(61, 255, 109, 0.3)",
      }}
      onClick={() => setShowModal(true)}
    >
      Subscribe Now
    </Button>
  </Container>
</section>


      {/* SUBSCRIBE MODAL */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Subscribe to EnglishEase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleSubscribe}
            style={{
              background: "linear-gradient(90deg, #00BFFF, #3DFF6D)",
              border: "none",
              color: "#0b1424",
            }}
          >
            Subscribe
          </Button>
        </Modal.Footer>
      </Modal>

      {/* SUBSCRIBED POPUP */}
      <AnimatePresence>
        {subscribed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="position-fixed top-50 start-50 translate-middle bg-dark text-white px-4 py-3 rounded-3 shadow-lg"
            style={{ zIndex: 2000 }}
          >
            ✅ You’re subscribed to EnglishEase!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
