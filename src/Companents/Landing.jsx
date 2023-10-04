import React from "react";
import { Col, Container, Row } from "reactstrap";

const Landing = () => {
  return (
    <>
      <section className="landing">
        <Container>
          <Row>
            <Col className="img">
              <img src="src\assets\images\bg_2.png" alt="..." />
            </Col>
            <Col className="text">
              <span className="hello-span">Hello!</span>
              <h1>
                I'm{" "}
                <span className="name">
                  Shehata <span>Omar</span>
                </span>
                <span className="detail">A Freelance Graphic Designer</span>
              </h1>
              <div>
                <button className="btn-1">Hire Me</button>
                <button className="btn-2">My works</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Landing;
