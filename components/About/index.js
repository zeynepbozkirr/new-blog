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
        // alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row
        className="AboutRow"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Col md={12} xs={24} s={24} style={{}}>
          <AboutMe />
        </Col>
        <Col md={12} xs={24} s={24}>
          <ContactMe />
        </Col>
      </Row>
    </div>
  );
};

export default AboutComp;
