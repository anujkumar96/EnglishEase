import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
      <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      style={{
        background: "linear-gradient(90deg, #0b1424 0%, #0b1424cc 100%)",
        boxShadow: "0 4px 15px rgba(61, 255, 109, 0.3)", // <-- add this line
      }}
    >
     <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold text-light fs-4">
             EnglishEase<span style={{ color: "#3DFF6D" }}>Innovations</span>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          style={{ background: "white" }}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              // { to: "/devops", label: "DevOps Services" },
              { to: "/portfolio", label: "Portfolio" },
              // { to: "/product", label: "Product" },
              { to: "/blog", label: "Blog" },
            ].map((item, idx) => (
              <LinkContainer key={idx} to={item.to}>
                <Nav.Link
                  onClick={() => setExpanded(false)}
                  className="text-light fw-medium px-2"
                  style={{ fontSize: "0.95rem" }}
                >
                  {item.label}
                </Nav.Link>
              </LinkContainer>
            ))}

            {/* CTA Button */}
            <LinkContainer to="/get-in-touch">
              <Button
                size="sm"
                className="fw-semibold px-3 py-2"
                style={{
                  backgroundColor: "#3DFF6D",
                  border: "none",
                  color: "#0b1424",
                  borderRadius: "8px",
                }}
                onClick={() => setExpanded(false)}
              >
                Get In Touch
              </Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
