import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import SearchInput from "./searchInput";
import { useCollection } from "../../Hooks/useCollection";
import searchInput from "./searchInput";
import ListComp from "./listComp";

const DrawerComp = () => {
  const { documents: Posts } = useCollection("Posts");
  const [searchData, setSearchData] = useState("");

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  //
  // useEffect(() => {
  //   setSearchData(Posts);
  // }, [Posts]);

  const searchHandleChange = async (e) => {
    if (e !== "") {
      const filterSearchData = Posts?.filter((post) =>
        post.Title.includes(e.toLocaleLowerCase())
      );
      setSearchData(filterSearchData);
    } else {
      setSearchData("");
    }
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

      <Drawer
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
