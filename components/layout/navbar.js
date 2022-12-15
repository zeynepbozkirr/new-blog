import React from "react";
import { Col, Image, Row } from "antd";
import image from "../../public/logo.png";
import Link from "next/link";
import ListSearch from "../Drawer/categoryList";

const Navbar = () => {
  return (
    <Row justify="space-between">
      <Col span={12}>
        <Link href="/">
          <text style={{}}> BEKİR YETİM </text>
        </Link>
      </Col>
      <Col span={12}>
        <Link href="/About">About</Link>
      </Col>
    </Row>
  );
};

export default Navbar;
