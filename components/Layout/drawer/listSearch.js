import React, { useEffect } from "react";
import { Card, Col, Row, Typography } from "antd";
import Link from "next/link";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const ListSearchData = ({ searchData, Posts, setSearchData }) => {
  const { Paragraph, Title, Text } = Typography;

  // useEffect(() => {
  //   if (!searchData) {
  //     setSearchData("");
  //   }
  // }, []);
  console.log(searchData);
  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

  return (
    <div>
      <Row>
        {searchData !== "" ? (
          <div>
            {searchData?.map((search, i) => (
              <Col>
                <Link href={`/posts/${search.id}`}>
                  <Bounce top>
                    <Paragraph
                      style={{
                        border: `1px solid ${
                          colors[Math.floor(Math.random() * colors.length)]
                        }`,
                        borderRadius: "10px",
                        width: "250px",
                        paddingLeft: "5px",
                      }}
                      ellipsis={{
                        rows: 1,
                        expandable: false,
                      }}
                    >
                      {search.title}
                    </Paragraph>
                  </Bounce>
                </Link>
              </Col>
            ))}
          </div>
        ) : (
          <div>
            <Fade left>
              {Posts?.map((pos) => (
                <Paragraph>
                  {pos.category?.map((categ) => (
                    <Paragraph
                      style={{
                        border: `1px solid ${
                          colors[Math.floor(Math.random() * colors.length)]
                        }`,
                        borderRadius: "10px",
                        width: "250px",
                        paddingLeft: "5px",
                      }}
                      ellipsis={{
                        rows: 1,
                        expandable: false,
                      }}
                    >
                      {" "}
                      {categ}{" "}
                    </Paragraph>
                  ))}
                </Paragraph>
              ))}
            </Fade>
          </div>
        )}
      </Row>
    </div>
  );
};

export default ListSearchData;
