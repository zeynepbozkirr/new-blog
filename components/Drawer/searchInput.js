import React, { useState } from "react";
import { Input } from "antd";
import style from "./../components.module.css";
import Search from "../../public/search.svg";
const SearchInput = ({ searchHandleChange, setSearchData }) => {
  const [searchActive, setSearchActive] = useState(true);

  console.log(searchActive);

  return (
    <div className={searchActive ? style.searchBox : style.searchBoxActive}>
      <div
        className={style.search}
        onClick={() => {
          setSearchActive(!searchActive);
          // if (searchActive) {
          //   setSearchData("");
          // }
        }}
      >
        <Search />
      </div>
      <div className={style.searchInput}>
        <Input
          placeholder="Search"
          bordered={false}
          onChange={(e) => searchHandleChange(e.target.value)}
        ></Input>
      </div>
    </div>
  );
};

export default SearchInput;
