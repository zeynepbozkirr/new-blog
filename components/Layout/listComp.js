import React, { useEffect } from "react";
import { Row } from "antd";

const ListComp = ({ searchData, Posts, setSearchData }) => {
  // useEffect(() => {
  //   if (!searchData) {
  //     setSearchData("");
  //   }
  // }, []);
  console.log(searchData);
  return (
    <>
      <Row>
        {searchData !== "" ? (
          <div>
            {searchData?.map((search) => (
              <li>{search.Title}</li>
            ))}
          </div>
        ) : (
          <div>
            {Posts?.map((ss) => (
              <li>{ss.Category}</li>
            ))}
          </div>
        )}
      </Row>
    </>
  );
};

export default ListComp;
