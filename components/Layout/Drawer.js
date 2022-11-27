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
    <div
      style={{
        backgroundColor: "#FEFCF3",
        height: "60px",
      }}
    >
      <MenuOutlined
        onClick={showDrawer}
        style={{
          height: "40px",
          width: "80px",
          fontSize: "26px",
          color: "#815B5B",
          margin: "10px",
          marginTop: "15px",
          marginLeft: "3px",
        }}
      />

      <Drawer placement="left" onClose={onClose} open={open}>
        xkgjf
      </Drawer>
    </div>
  );
};

export default DrawerComp;
