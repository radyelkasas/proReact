import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineArrowRight,
  AiOutlineMail,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { Container, Row ,Col} from "reactstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row lg={4} md={1} sm={1} xs={1}>
            <Col>
              <h1>About</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="social d-flex gap-3">
                <li>
                  <a href="#">
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BiLogoFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineInstagram />
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <h1>Links</h1>
              <ul>
                <li className="pt-2">
                  <a href="#">
                    <AiOutlineArrowRight /> Home
                  </a>
                </li>
                <li className="pt-2">
                  <a href="#">
                    <AiOutlineArrowRight /> About
                  </a>
                </li>
                <li className="pt-2">
                  <a href="#">
                    <AiOutlineArrowRight /> Services
                  </a>
                </li>
                <li className="pt-2">
                  <a href="#">
                    <AiOutlineArrowRight /> Projects
                  </a>
                </li>
                <li className="pt-2">
                  <a href="#">
                    <AiOutlineArrowRight /> Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <h1>Services</h1>
              <ul>
                <li className="pt-2">
                  <a href="#">
                    <AiOutlineArrowRight /> Web Design
                  </a>
                </li>
                <li className="pt-2">
                  <a href="#">
                    <AiOutlineArrowRight /> Web Development
                  </a>
                </li>
                <li className="pt-2">
                  <a href="#">
                    <AiOutlineArrowRight /> Business Strategy
                  </a>
                </li>
                <li className="pt-2">
                  <a href="#">
                    <AiOutlineArrowRight /> Data Analysis
                  </a>
                </li>
                <li className="pt-2">
                  <a href="#">
                    <AiOutlineArrowRight /> Graphic Design
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <h1>Have a Questions?</h1>
              <div>
                <ImLocation/>
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
              <div>
                <BsFillTelephoneFill className="fs-3" />
                <p>+201010428983</p>
              </div>
              <div>
                <AiOutlineMail className="fs-3" />
                <p>info@yourdomain.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
