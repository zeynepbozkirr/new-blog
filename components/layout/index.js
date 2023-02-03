import React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
