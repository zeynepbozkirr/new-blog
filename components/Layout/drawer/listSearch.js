import React, { useEffect } from "react";
import { Card, Col, Row, Typography } from "antd";
import Link from "next/link";

const ListSearchData = ({ searchData, Posts, setSearchData }) => {
  const { Paragraph, Title, Text } = Typography;

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
              <Col>
                <Link href={`/posts/${search.id}`}>
                  <Card
                    size="small"
                    title={
                      <Text
                        length="5"
                        ellipsis={{
                          rows: 1,
                          expandable: false,
                        }}
                      >
                        {search.title}
                      </Text>
                    }
                    style={{
                      width: "200px",
                      background: "#FEFCF3",
                    }}
                  >
                    <Paragraph
                      ellipsis={{
                        rows: 1,
                        expandable: false,
                      }}
                    >
                      {search.postContent}
                    </Paragraph>
                  </Card>
                </Link>
              </Col>
            ))}
          </div>
        ) : (
          <div>
            {Posts?.map((pos) => (
              <li>
                {pos.category?.map((categ) => (
                  <di>
                    <li> {categ} </li>
                  </di>
                ))}
              </li>
            ))}
          </div>
        )}
        S
      </Row>
    </>
  );
};

export default ListSearchData;
