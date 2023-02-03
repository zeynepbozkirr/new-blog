import React, { useState } from "react";
import { Input } from "antd";
import styles from "./drawer.module.css";
import Search from "../../public/search.svg";

const SearchInput = ({ searchHandleChange, setSearchData, searchData }) => {
  const [searchActive, setSearchActive] = useState(true);
  const [valuee, setValue] = useState();

  return (
    <Input
      className={styles.searchBox}
      placeholder="Search"
      bordered={false}
      // value={searchActive ? "" : valuee}
      onChange={(e) => {
        setValue(e.target.value);
        searchHandleChange(e.target.value);
      }}
    ></Input>
  );
};

export default SearchInput;
