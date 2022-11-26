import React from "react";
import Drawer from "./Drawer";

const Layout = ({ children }) => {
  return (
    <>
      <Drawer />
      <main>{children}</main>
    </>
  );
};

export default Layout;
