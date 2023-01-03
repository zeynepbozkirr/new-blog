import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import styles from "./layout.module.css";

const Navbar = () => {
  return (
    <Row className={styles.navbar}>
      <Col lg={11} md={11} sm={11} xs={11} offset={1}>
        <Link href="/">
          <text className={styles.navbarList}>Bekir Yetim</text>
        </Link>
      </Col>
      <Col lg={6} md={6} sm={6} xs={6} offset={6}>
        <Link href="/About">
          <text className={styles.navbarList}>About </text>
        </Link>
      </Col>
    </Row>
  );
};

export default Navbar;
