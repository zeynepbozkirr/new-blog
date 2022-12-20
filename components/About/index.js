import React from "react";
import { Col, Row } from "antd";
import AboutMe from "./about";
import ContactMe from "./contact";

const AboutComp = () => {
  return (
    <Row
      className="AboutRow"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Col lg={12} md={12} xs={24} sm={24}>
        <AboutMe />
      </Col>
      <Col xl={12} lg={12} md={12} xs={24} sm={24}>
        <ContactMe />
      </Col>
    </Row>
  );
};

export default AboutComp;
