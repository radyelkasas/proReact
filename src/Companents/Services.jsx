import React, { useState } from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { Col, Row } from "reactstrap";
import BoxServ from "./BoxServ";


const Services = () => {
  const [boxs, setBox] = useState([
    {
      id: 0,
      icon: <MdOutlineDesignServices />,
      text: "Web design",
    },
    {
      id: 1,
      icon: <MdOutlineDesignServices />,
      text: "Web design",
    },
    {
      id: 2,
      icon: <MdOutlineDesignServices />,
      text: "Web design",
    },
    {
      id: 3,
      icon: <MdOutlineDesignServices />,
      text: "Web design",
    },
    {
      id: 4,
      icon: <MdOutlineDesignServices />,
      text: "Web design",
    },
    {
      id: 5,
      icon: <MdOutlineDesignServices />,
      text: "Web design",
    },
  ]);
  return (
    <>
      <section className="service">
        <h1 className="title">Services</h1>
        <Row lg={4} md={1} sm={1} xs={1}>
          {boxs.map((box) => (
            <Col key={box.id}>
              <BoxServ text={box.text} icon={box.icon} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Services;
