import React from "react";
import { Input } from "antd";

const SearchInput = ({ searchHandleChange }) => {
  return (
    <div>
      <Input onChange={(e) => searchHandleChange(e.target.value)}></Input>
    </div>
  );
};

export default SearchInput;
