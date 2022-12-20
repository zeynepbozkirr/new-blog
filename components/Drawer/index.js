import React, { useState } from "react";
import SearchInput from "./searchInput";
import { useCollection } from "../../Hooks/useCollection";
import CategoryList from "./categoryList";

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
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <SearchInput
        setSearchData={(x) => setSearchData(x)}
        searchHandleChange={(e) => searchHandleChange(e)}
      ></SearchInput>

      <CategoryList
        filterCategory={filterCategory}
        setFilterCategory={(x) => setFilterCategory(x)}
        Posts={Posts}
        searchData={searchData}
        setSearchData={(x) => setSearchData(x)}
      ></CategoryList>
    </div>
  );
};

export default DrawerComp;
