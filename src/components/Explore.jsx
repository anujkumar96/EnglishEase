import { Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Explore() {
  const cards = [
    { title: "Cloud Solutions", text: "Modern and secure cloud deployments." },
    { title: "IoT Integrations", text: "Smart and connected device ecosystems." },
    { title: "DevOps Automation", text: "CI/CD pipelines for rapid delivery." },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 text-primary">Explore Our Expertise</h2>
      <Row xs={1} md={3} className="g-4">
        {cards.map((item, idx) => (
          <Col key={idx}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
 
