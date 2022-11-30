import React from "react";
import Drawer from "./drawer";

const Layout = ({ children }) => {
  return (
    <>
      <Drawer />
      <main>{children}</main>
    </>
  );
};

export default Layout;
