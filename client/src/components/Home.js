import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import Particle from "./Particle";





function Home() {
    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                </h1>
  
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> RAJ KISHOR SAH</strong>
                </h1>
  
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
  
              <Col md={5} style={{ paddingBottom: 20 }}>
              </Col>
            </Row>
          </Container>
        </Container>
        <Home />
      </section>
    );
  }
  
  export default Home;