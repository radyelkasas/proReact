import React from "react";
import { Col, Row } from "reactstrap";

const FormCContact = () => {
  return (
    <>
      <div className="from-contact">
        <Row lg={2} md={2} sm={1} xs={1}>
          <Col className="img p-0">
            <img src="src\assets\images\about.jpg" alt="person" />
          </Col>
          <Col className="p-0">
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea cols={40} rows={6} placeholder="Message">
              </textarea>
              <input type="submit" value="Send Message" className="submit" />
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FormCContact;
