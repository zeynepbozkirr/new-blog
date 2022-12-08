import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { useCollection } from "../Hooks/useCollection";
import Link from "next/link";
import { Typography } from "antd";
import { ThreeDots } from "react-loader-spinner";
const { Paragraph, Text, Title } = Typography;
import styles from "./components.module.css";
import { ReadOutlined } from "@ant-design/icons";

const Posts = ({ filterCategory, setFilterCategory }) => {
  const { documents: Posts } = useCollection("posts");
  useEffect(() => {
    setFilterCategory(Posts);
  }, [Posts]);

  const d = new Date();
  console.log(d, "date");

  console.log(filterCategory, "gfgf");
  return (
    <Row>
      {filterCategory?.map((post) => (
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

              <Text>{post.date}</Text>
              <Text style={{ color: "#989da2" }}>
                &nbsp; - &nbsp; <ReadOutlined style={{ color: "#FAAB78" }} />{" "}
                615 okunma
              </Text>
              <br />
              <Text style={{ color: "purple" }}>
                {post.category[0]} - {post.category[1]}
              </Text>
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
                <Button className={styles.button}>
                  <Text className={styles.buttonText}>Read More {`>>`}</Text>
                </Button>
              </Link>
              <hr />
            </div>
          </Col>
        </Row>
      ))}
    </Row>
  );
};

export default Posts;
