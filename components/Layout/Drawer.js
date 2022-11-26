import React, { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const DrawerComp = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuOutlined
        onClick={showDrawer}
        style={{ fontSize: "26px", color: "#08c", margin: "5px" }}
      />

      <Drawer placement="left" onClose={onClose} open={open}>
        xkgjf
      </Drawer>
    </>
  );
};

export default DrawerComp;
