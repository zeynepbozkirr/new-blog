import React, { useEffect, useState } from "react";
import { Button, Card, Col, Input, Row } from "antd";
import { useCollection } from "../Hooks/useCollection";
import Link from "next/link";

const CardComp = () => {
  const { documents: Posts } = useCollection("Posts");

  return (
    <>
      <Row>
        {Posts && Posts?.length !== 0
          ? Posts.map((post) => (
              <Col span={6}>
                <Card
                  size="small"
                  title={post.Title}
                  extra={<Link href={`/posts/${post.id}`}>more</Link>}
                  style={{
                    width: 300,
                    height: 300,
                    overflow: "hidden",
                    background: "#EED6C4",
                    marginBottom: "10px",
                  }}
                >
                  <p
                    style={{
                      width: 300,
                      height: 300,
                    }}
                  >
                    {post.Text}
                  </p>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </>
  );
};

export default CardComp;
