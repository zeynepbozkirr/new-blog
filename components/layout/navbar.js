import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import styles from "./layout.module.css";

const Navbar = () => {
  return (
    <Row className={styles.navbar}>
      <Col className={styles.navbarList}>
        <Link href="/" className={styles.navbarLink}>
          Bekir Yetim
        </Link>
      </Col>
    </Row>
  );
};

export default Navbar;
