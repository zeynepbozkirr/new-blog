import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import Link from "next/link";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const CategoryList = ({ searchData, Posts, setFilterCategory }) => {
  const { Paragraph } = Typography;

  const onClickCategory = (categ) => {
    const filterCategory = Posts?.filter((post) =>
      post.category.includes(categ.toLocaleLowerCase())
    );
    setFilterCategory(filterCategory);
  };
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
                        border: `1px solid #9C1AFF`,
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
                        border: `1px solid #9C1AFF`,
                        borderRadius: "10px",
                        width: "250px",
                        paddingLeft: "5px",
                      }}
                      ellipsis={{
                        rows: 1,
                        expandable: false,
                      }}
                    >
                      <Button onClick={() => onClickCategory(categ)}>
                        {categ}{" "}
                      </Button>
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

export default CategoryList;
