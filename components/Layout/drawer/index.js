import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import SearchInput from "./searchInput";
import { useCollection } from "../../../Hooks/useCollection";
import ListComp from "./listSearch";

const DrawerComp = () => {
  const { documents: Posts } = useCollection("posts");
  const [searchData, setSearchData] = useState("");

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const searchHandleChange = async (e) => {
    if (e !== "") {
      const filterSearchData = Posts?.filter((post) =>
        post.title.includes(e.toLocaleLowerCase())
      );
      setSearchData(filterSearchData);
    } else {
      setSearchData("");
    }
  };

  return (
    <div
      style={{
        // backgroundColor: "red",
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

      <Drawer
        // style={{ background: "red", height: "550px" }}
        closable={false}
        title={
          <SearchInput
            searchHandleChange={(e) => searchHandleChange(e)}
          ></SearchInput>
        }
        placement="left"
        onClose={onClose}
        open={open}
      >
        <ListComp
          Posts={Posts}
          searchData={searchData}
          setSearchData={(x) => setSearchData(x)}
        ></ListComp>
      </Drawer>
    </div>
  );
};

export default DrawerComp;
