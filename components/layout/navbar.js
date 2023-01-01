import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import styles from "./layout.module.css";

const Navbar = () => {
  return (
    <Row className={styles.navbar}>
      <Col span={12}>
        <Link href="/">
          <text className={styles.navbarList}>Bekir Yetim</text>
        </Link>
      </Col>
      <Col span={6} offset={6}>
        <Link href="/About">
          <text className={styles.navbarList}>About </text>
        </Link>
      </Col>
    </Row>
  );
};

export default Navbar;
