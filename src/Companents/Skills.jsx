import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "reactstrap";

const Skills = () => {
  const [progress, setProgress] = useState([
    {
      id: 0,
      skill: "Photoshop",
      percent: "95%",
    },
    {
      id: 1,
      skill: "Photoshop",
      percent: "95%",
    },
    {
      id: 2,
      skill: "Photoshop",
      percent: "95%",
    },
    {
      id: 3,
      skill: "Photoshop",
      percent: "95%",
    },
    {
      id: 4,
      skill: "Photoshop",
      percent: "95%",
    },
    {
      id: 5,
      skill: "Photoshop",
      percent: "95%",
    },
  ]);

  return (
    <>
      <section className="skills">
        <h1 className="title">Skills</h1>
        <Container>
          <Row lg={2} md={2} sm={1} xs={1}>
            {progress.map((skill) => (
              <Col key={skill.id}>
                <div>
                  <p>{skill.skill}</p>
                  <span>{skill.percent}</span>
                </div>
                <p className="line">
                  <span></span>
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Skills;
