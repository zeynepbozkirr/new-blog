import React from "react";
import { Col, Image, Row } from "antd";
import image from "../../public/logo.png";
import Link from "next/link";
import ListSearch from "../Drawer/listSearch";

const Navbar = () => {
  return (
    <Row justify="center" style={{ background: "#D9D9D9" }}>
      <Col>
        <Link href="/">
          <Image width="80px" src="./logo.png" preview={false} />
        </Link>
      </Col>
    </Row>
  );
};

export default Navbar;
