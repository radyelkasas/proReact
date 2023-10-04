import React from "react";
import { Col, Container, Row } from "reactstrap";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h1 className="title">Projects</h1>
        <Container>
          <Row md={1} sm={1} xs={1}>
            <Col className="left-row1 col" lg={4}>
              <div className="overlay">
                <h1>Branding & Illustration Design</h1>
                <span>WEB DESIGN</span>
              </div>
            </Col>
            <Col className="right-row1 col" lg={7}>
              <div className="overlay">
                <h1>Branding & Illustration Design</h1>
                <span>WEB DESIGN</span>
              </div>
            </Col>
            <Col className="right-row1 col" lg={7}>
              <div className="overlay">
                <h1>Branding & Illustration Design</h1>
                <span>WEB DESIGN</span>
              </div>
            </Col>
            <Col className="left-row1 col" lg={4}>
              <div className="overlay">
                <h1>Branding & Illustration Design</h1>
                <span>WEB DESIGN</span>
              </div>
            </Col>
            <Col className="right-row1 col" lg={7}>
              <div className="overlay">
                <h1>Branding & Illustration Design</h1>
                <span>WEB DESIGN</span>
              </div>
            </Col>
            <Col className="left-row1 col" lg={4}>
              <div className="overlay">
                <h1>Branding & Illustration Design</h1>
                <span>WEB DESIGN</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
