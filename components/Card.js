import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { useCollection } from "../Hooks/useCollection";
import Link from "next/link";
import { Typography } from "antd";
import { ThreeDots } from "react-loader-spinner";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Paragraph, Text } = Typography;

const CardComp = () => {
  const { documents: Posts } = useCollection("posts");
  console.log(Posts, "pp");

  return (
    <>
      <Row justify="space-around">
        {Posts ? (
          Posts.map((post) => (
            <Row>
              <Col>
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
                      {post.title}
                    </Text>
                  }
                  style={{
                    width: 300,
                    height: 300,
                    background: "#EED6C4",
                    marginTop: "50px",
                  }}
                >
                  <Paragraph
                    ellipsis={{
                      rows: 8,
                      expandable: false,
                    }}
                  >
                    {post.postContent}
                  </Paragraph>
                  <Link
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      color: "#9E7676",
                    }}
                    href={`/posts/${post.id}`}
                  >
                    <ArrowRightOutlined
                      style={{
                        width: "50px",
                        height: "30px",
                      }}
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
          ))
        ) : (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#9E7676"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
      </Row>
    </>
  );
};

export default CardComp;
