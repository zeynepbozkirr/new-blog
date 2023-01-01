import React, { useState } from "react";
import { Input } from "antd";
import styles from "./drawer.module.css";
import Search from "../../public/search.svg";

const SearchInput = ({ searchHandleChange, setSearchData, searchData }) => {
  const [searchActive, setSearchActive] = useState(true);
  const [valuee, setValue] = useState();

  return (
    <div className={searchActive ? styles.searchBox : styles.searchBoxActive}>
      <div
        className={styles.search}
        onClick={() => {
          setSearchActive(!searchActive);
          setValue("");
          setSearchData("");
        }}
      >
        <Search />
      </div>
      <div className={styles.searchInput}>
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
