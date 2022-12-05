import React from "react";
import { Input } from "antd";

const SearchInput = ({ searchHandleChange }) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Input
        placeholder="Search"
        allowClear
        onChange={(e) => searchHandleChange(e.target.value)}
      ></Input>
    </div>
  );
};

export default SearchInput;
