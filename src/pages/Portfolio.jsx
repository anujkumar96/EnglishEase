import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LinkContainer } from "react-router-bootstrap";


export default function Portfolio() {
  const projects = [
    {
      title: "FluentTalk AI",
      desc: "An AI-powered English conversation partner that helps users build confidence through natural dialogues, pronunciation feedback, and vocabulary suggestions.",
      img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=900&q=80",
      tag: "AI Practice Assistant",
    },
    {
      title: "SpeakRight Pro",
      desc: "Corporate communication training suite offering personalized accent coaching, grammar refinement, and real-time fluency assessments for professionals.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      tag: "Corporate Communication",
    },
    {
      title: "LingoLearn App",
      desc: "A gamified mobile platform that turns English practice into fun, bite-sized challenges with real-time progress tracking and streak rewards.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
      tag: "Mobile Learning",
    },
    {
      title: "IELTS MasterClass",
      desc: "A complete IELTS prep ecosystem featuring live trainer sessions, AI-based speaking evaluation, and personalized learning dashboards.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      tag: "Exam Preparation",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div style={{ marginTop: "55px", width: "100vw", overflowX: "hidden" }}>
      {/* HERO SECTION */}
      <motion.section
        className="text-white py-5 position-relative portfolio-hero"
        whileHover={{ backgroundPosition: "100% 0" }}
      >
        <Container className="py-5 text-center">
          <motion.h1
            className="fw-bold display-5 mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our <span style={{ color: "#FFB347" }}>Portfolio</span>
          </motion.h1>
          <motion.p
            className="lead text-light"
            style={{ maxWidth: "720px", margin: "auto" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Take a look at some of our innovative language-learning and
            communication tools that help learners speak confidently and sound
            professional in any conversation.
          </motion.p>
        </Container>
      </motion.section>

      {/* PORTFOLIO CAROUSEL */}
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
            Featured Projects
          </motion.h2>

          <Slider {...settings}>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="px-3"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="portfolio-card p-1 rounded-4 position-relative">
                  <div className="portfolio-inner rounded-4 bg-white shadow-sm">
                    <div
                      className="position-relative"
                      style={{
                        overflow: "hidden",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                      }}
                    >
                      <motion.img
                        src={p.img}
                        alt={p.title}
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "220px",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                        whileHover={{ scale: 1.05 }}
                      />
                      <motion.span
                        className="badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill"
                        style={{
                          background:
                            "linear-gradient(90deg, #FF9A8B, #FF6A88, #FFB347)",
                          color: "#fff",
                          fontSize: "0.8rem",
                        }}
                      >
                        {p.tag}
                      </motion.span>
                    </div>

                    <div className="p-4">
                      <h5 className="fw-bold text-dark mb-2">{p.title}</h5>
                      <p className="text-secondary small mb-3">{p.desc}</p>
                      <Button
                        variant="dark"
                        size="sm"
                        className="rounded-pill px-3"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </Container>
      </section>

{/* CTA SECTION (Refined Look) */}
<section
  className="text-center text-white py-5"
  style={{
    background: "linear-gradient(135deg, #0b1424 0%, #1246A0 50%, #00BFFF 100%)",
    boxShadow: "inset 0 0 60px rgba(0,191,255,0.25)",
  }}
>
  <LinkContainer to="/get-in-touch">
    <Container>
      <motion.h2
        className="fw-bold mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Ready to Elevate Your English Communication Skills?
      </motion.h2>
      <motion.p
        className="text-light mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        style={{
          maxWidth: "700px",
          margin: "auto",
          fontSize: "1.05rem",
          opacity: 0.9,
        }}
      >
        Let’s collaborate to design innovative, practical English-learning
        experiences that inspire confident global speakers.
      </motion.p>
      <Button
        variant="light"
        className="px-5 py-2 fw-semibold rounded-pill"
        style={{
          color: "#0b1424",
          fontWeight: 600,
          boxShadow: "0 4px 20px rgba(61, 255, 109, 0.4)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Get Started
      </Button>
    </Container>
  </LinkContainer>
</section>


      {/* ANIMATED BORDER EFFECT + HERO STYLE */}
      <style>{`
        .portfolio-hero {
          background: linear-gradient(135deg, #0b1424 0%, #FF6A88 60%, #1246A0 60%);
          clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
          background-size: 200% 200%;
          transition: background-position 1s ease-in-out;
        }

        .portfolio-card {
          position: relative;
          background: linear-gradient(
            90deg,
            #FF9A8B,
            #FF6A88,
            #FFB347,
            #3DFF6D,
            #00BFFF
          );
          background-size: 400% 400%;
          animation: borderFlow 6s linear infinite;
          padding: 3px;
          border-radius: 16px;
        }

        .portfolio-inner {
          background: #fff;
          border-radius: 14px;
          height: 100%;
          overflow: hidden;
        }

        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .slick-prev:before, .slick-next:before {
          color: #1246A0 !important;
          font-size: 28px !important;
        }

        .portfolio-card:hover {
          box-shadow: 0 0 25px rgba(255, 179, 71, 0.4),
                      0 0 45px rgba(0, 191, 255, 0.3);
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
