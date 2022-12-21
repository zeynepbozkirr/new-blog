import React, { useState } from "react";
import { Input } from "antd";
import style from "./../components.module.css";
import Search from "../../public/search.svg";
const SearchInput = ({ searchHandleChange, setSearchData, searchData }) => {
  const [searchActive, setSearchActive] = useState(true);
  const [valuee, setValue] = useState();

  console.log(searchData, "data", valuee);

  return (
    <div className={searchActive ? style.searchBox : style.searchBoxActive}>
      <div
        className={style.search}
        onClick={() => {
          setSearchActive(!searchActive);
          setValue("");
          setSearchData("");
        }}
      >
        <Search />
      </div>
      <div className={style.searchInput}>
        <Input
          placeholder="Search"
          bordered={false}
          value={searchActive ? "" : valuee}
          onChange={(e) => {
            setValue(e.target.value);
            searchHandleChange(e.target.value);
          }}
        ></Input>
      </div>
    </div>
  );
};

export default SearchInput;
