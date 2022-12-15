import React, { useState } from "react";
import { Input } from "antd";
import style from "./../components.module.css";
import Search from "../../public/search.svg";
const SearchInput = ({ searchHandleChange }) => {
  const [searchActive, setSearchActive] = useState(true);
  return (
    <div className={searchActive ? style.searchBox : style.searchBoxActive}>
      <div
        className={style.search}
        onClick={() => setSearchActive(!searchActive)}
      >
        <Search />
      </div>
      <div className={style.searchInput}>
        <Input
          placeholder="Search"
          bordered={false}
          // allowClear={"ww"}
          onChange={(e) => searchHandleChange(e.target.value)}
        ></Input>
      </div>
    </div>
  );
};

export default SearchInput;
