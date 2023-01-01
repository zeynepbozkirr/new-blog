import React from "react";
import Navbar from "./navbar";
import { Col, Row } from "antd";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
