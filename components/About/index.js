import React from "react";
import { Col, Row } from "antd";
import AboutMe from "./about";
import ContactMe from "./contact";
import useWindowSize from "../../Hooks/useWindowSize";

const AboutComp = () => {
  const { width, height } = useWindowSize();

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Row
        className="AboutRow"
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
