import React from "react";
import { Col, Image, Row } from "antd";
import image from "../../public/logo.png";
import Link from "next/link";
import ListSearch from "../Drawer/categoryList";

const Navbar = () => {
  return (
    <Row justify="space-around" style={{ background: "#E2E3E4", height: 55 }}>
      <Col span={12}>
        <Link href="/">
          <text className="Navbar">Bekir Yetim</text>
        </Link>
      </Col>
      <Col
        span={12}
        style={{ display: "flex", justifyContent: "end", paddingRight: "30px" }}
      >
        <Link href="/About">
          <text className="Navbar">About </text>
        </Link>
      </Col>
    </Row>
  );
};

export default Navbar;
