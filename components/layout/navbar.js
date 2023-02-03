import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import styles from "./layout.module.css";

const Navbar = () => {
  return (
    <Row className={styles.navbar}>
      <Col offset={1}>
        <Link href="/">
          <text className={styles.navbarList}>Bekir Yetim</text>
        </Link>
      </Col>
    </Row>
  );
};

export default Navbar;
