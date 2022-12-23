import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";

const Navbar = () => {
  return (
    <Row
      style={{
        background: "#E2E3E4",
        height: 55,
      }}
    >
      <Col span={12}>
        <Link href="/">
          <text className="Navbar">Bekir Yetim</text>
        </Link>
      </Col>
      <Col span={6} offset={6}>
        <Link href="/About">
          <text className="Navbar">About </text>
        </Link>
      </Col>
    </Row>
  );
};

export default Navbar;
