import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { useCollection } from "../Hooks/useCollection";
import Link from "next/link";
import { Typography } from "antd";
import { ThreeDots } from "react-loader-spinner";
const { Paragraph, Text, Title } = Typography;
import styles from "./components.module.css";

const Posts = ({ filterCategory, setFilterCategory }) => {
  const { documents: Posts } = useCollection("posts");
  useEffect(() => {
    setFilterCategory(Posts);
  }, [Posts]);

  console.log(filterCategory, "gfgf");
  return (
    <>
      {filterCategory ? (
        filterCategory.map((post) => (
          <Row>
            <Col span={24}>
              <div style={{ marginTop: "50px" }}>
                <Title
                  length="5"
                  ellipsis={{
                    rows: 1,
                    expandable: false,
                  }}
                >
                  {post.title}
                </Title>
                <Text>{post.category[0]}</Text> -
                <Text>{post.date.toLocaleString()}</Text> -
                <Text>615 okunma</Text>
                <Paragraph
                  ellipsis={{
                    rows: 4,
                    expandable: false,
                  }}
                  style={{ marginTop: "10px" }}
                >
                  {post.postContent}
                </Paragraph>
                <Link
                  style={{
                    display: "flex",
                    color: "#9E7676",
                  }}
                  href={`/posts/${post.id}`}
                >
                  <Button className={styles.button}>Read More {`>>`} </Button>
                </Link>
                <hr />
              </div>
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
    </>
  );
};

export default Posts;
