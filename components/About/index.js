import React from "react";
import { Col, Row } from "antd";
import AboutMe from "./about";
import ContactMe from "./contact";

const AboutComp = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Row
        style={{
          display: "flex",
          alignItems: "center",
        }}
        justify="center"
      >
        <Col md={10} xs={24}>
          <AboutMe />
        </Col>
        <Col md={10} xs={24}>
          <ContactMe />
        </Col>
      </Row>
    </div>
  );
};

export default AboutComp;
