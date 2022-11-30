import React from "react";
import Drawer from "./drawer";

const Layout = ({ children }) => {
  return (
    <div>
      <Drawer />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
