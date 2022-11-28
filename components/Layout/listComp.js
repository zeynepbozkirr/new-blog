import React from "react";
import { Row } from "antd";

const ListComp = ({ searchData, Posts }) => {
  console.log(Posts);
  return (
    <>
      <Row>
        <div>
          {searchData?.map((search) => (
            <li>{search.Title}</li>
          ))}
        </div>

        <div>
          {Posts[5].Date}
          {/*{Posts?.map((ss) => (*/}
          {/*  <li>{ss.Date}</li>*/}
          {/*))}*/}
        </div>
      </Row>
    </>
  );
};

export default ListComp;
