import React, { useState } from "react";
import SearchInput from "./searchInput";
import { useCollection } from "../../Hooks/useCollection";
import CategoryList from "./categoryList";
import { Col, Row } from "antd";

const DrawerComp = ({ filterCategory, setFilterCategory }) => {
  const { documents: Posts } = useCollection("posts");
  const [searchData, setSearchData] = useState("");

  const searchHandleChange = async (e) => {
    if (e !== "") {
      const filterSearchData = Posts?.filter((post) =>
        post.title.toLocaleLowerCase().includes(e)
      );
      setSearchData(filterSearchData);
    } else {
      setSearchData("");
    }
  };

  return (
    <Row
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Col>
        <SearchInput
          searchData={searchData}
          setSearchData={(x) => setSearchData(x)}
          searchHandleChange={(e) => searchHandleChange(e)}
        ></SearchInput>
      </Col>
      <Col>
        <CategoryList
          filterCategory={filterCategory}
          setFilterCategory={(x) => setFilterCategory(x)}
          Posts={Posts}
          searchData={searchData}
          setSearchData={(x) => setSearchData(x)}
        ></CategoryList>
      </Col>
    </Row>
  );
};

export default DrawerComp;
