import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <section className="about">
          <Container>
            <Row lg={2} md={1} sm={1}>
              <img src="src\assets\images\bg_1.png" alt="image" />
              <div className="text">
                <h1 className="title">About</h1>
                <div className="info">
                  <div>
                    <h1>Name:</h1>
                    <span>Shehata Omar</span>
                  </div>
                  <div>
                    <h1>Date of birth:</h1>
                    <span>January 01, 1987</span>
                  </div>
                  <div>
                    <h1>Address:</h1>
                    <span>San Francisco CA 97987 USA</span>
                  </div>
                  <div>
                    <h1>Zip code:</h1>
                    <span>1000</span>
                  </div>
                  <div>
                    <h1>Email:</h1>
                    <span>clarkthomp@gmail.com</span>
                  </div>
                  <div>
                    <h1>Phone:</h1>
                    <span>+1-2234-5678-9-0</span>
                  </div>
                </div>
                <h3>
                  <span>
                    {counterOn && (
                      <CountUp start={0} end={120} duration={4} delay={1} />
                    )}
                  </span>
                  Project complete
                </h3>
                <button className="text-uppercase">Download cv</button>
              </div>
            </Row>
          </Container>
        </section>
      </ScrollTrigger>
    </>
  );
};

export default About;
