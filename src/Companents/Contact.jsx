import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaAddressCard } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { BsFillTelephoneFill, BsFillSendFill } from "react-icons/bs";
import { Row, Col } from "reactstrap";
import FormCContact from "./FormCContact";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const Contact = () => {
  const [contact, setContact] = useState([
    {
      id: 0,
      icon: <FaAddressCard />,
      title: "ADDRESS",
      desc: "198 West 21th Street, Suite 721 New York NY 10016",
    },
    {
      id: 1,
      icon: <BsFillTelephoneFill />,
      title: "CONTACT NUMBER",
      desc: "+ 201010428983",
    },
    {
      id: 2,
      icon: <BsFillSendFill />,
      title: "EMAIL ADDRESS",
      desc: "info@yoursite.com",
    },
    {
      id: 3,
      icon: <BiWorld />,
      title: "WEBSITE",
      desc: "yoursite.com",
    },
  ]);
  return (
    <>
      <section className="contact">
        <h1 className="title">Contact</h1>
        <Container>
          <Row lg={4} md={1} sm={1} xs={1}>
            {contact.map((item) => (
              <Col key={item.id}>
                <div className="box">
                  <span>{item.icon}</span>
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
          {/* <FormCContact /> */}
          <div className="last-icon">
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
