import React, { useEffect, useState } from "react";
import { Button, Card, Col, Input, Row } from "antd";
import { useCollection } from "../Hooks/useCollection";
import Link from "next/link";
import { useRouter } from "next/router";

const CardComp = () => {
  const { documents: Posts } = useCollection("Posts");
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Row>
        {!Posts?.length == 0
          ? Posts.map((post) => (
              <Col span={6}>
                <Card
                  size="small"
                  title={post.Title}
                  extra={
                    <button onClick={() => router.push(` /posts/${post.id}`)}>
                      Click here to read more
                    </button>
                  }
                  style={{
                    width: 300,
                    height: 300,
                    overflow: "hidden",
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
                  {/*<Link href=>more</Link>*/}
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
};

export default CardComp;
//
// export async function getStaticProps() {
//   return {
//     props: {
//       Posts,
//     },
//   };
// }
