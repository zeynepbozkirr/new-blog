import React, { useEffect, useState } from "react";
import { Button, Card, Col, Input, Row } from "antd";
import { useCollection } from "../Hooks/useCollection";
import Link from "next/link";
import { Typography } from "antd";
import { space } from "@chakra-ui/react";
const { Paragraph } = Typography;

const CardComp = () => {
  const { documents: Posts } = useCollection("Posts");
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <>
      <Row justify="space-around">
        {Posts && Posts?.length !== 0
          ? Posts.map((post) => (
              <Row>
                <Col>
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
                    <Paragraph
                      ellipsis={{
                        rows: 6,
                        expandable: false,
                        symbol: "more",
                      }}
                    >
                      {post.Text}
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            ))
          : null}
      </Row>
    </>
  );
};

export default CardComp;
