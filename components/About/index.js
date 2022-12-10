import React from "react";
import { Col, Row } from "antd";
import AboutMe from "./about";
import ContactMe from "./contact";

const AboutComp = () => {
  return (
    <Row style={{ marginTop: "80px" }} justify="center">
      <Col md={10} xs={24}>
        <AboutMe />
      </Col>
      <Col md={10} xs={24}>
        <ContactMe />
      </Col>
    </Row>
  );
};

export default AboutComp;
