import { Button, Col, Row, Typography } from "antd";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";
import renderHTML from "react-render-html";
import { useCollection } from "../../Hooks/useCollection";
import Link from "next/link";
import styles from "../../components/components.module.css";

const { Title, Text } = Typography;

const PostDetail = ({ props }) => {
  const { documents: AllPosts } = useCollection("posts");

  const [posts, setPosts] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const fetching = async () => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data();
    setPosts(docData);
  };

  useEffect(() => {
    fetching();
  }, [id]);

  return (
    <>
      {posts ? (
        <Row justify="center">
          <Col
            key={posts.id}
            xs={24}
            sm={24}
            md={16}
            lg={16}
            // offset={1}
            style={{ marginTop: "50px" }}
          >
            <Col>
              <Title>{posts.title}</Title>
            </Col>
            <Col>{renderHTML(posts.postContent)}</Col>
            <br /> <br />
            <Col>
              <Text style={{ color: "#989DA2", fontWeight: "bold" }}>
                Eklenme Tarihi :
              </Text>
              <Text style={{ color: "#FF5959" }}> {posts.date}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#989DA2", fontWeight: "bold" }}>
                Okunma Sayısı :
              </Text>
              <Text style={{ color: "#FF5959" }}> {posts.readCount}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#989DA2", fontWeight: "bold" }}>
                Category :
              </Text>

              {posts.category.map((item, index) => {
                return (
                  <Text key={index} style={{ color: "#FF5959" }}>
                    {" "}
                    {item}{" "}
                  </Text>
                );
              })}
            </Col>
          </Col>
          <Col xs={23} sm={23} md={4} lg={4} offset={1}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "400px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {AllPosts.map((item, index) => {
                return (
                  item.title !== posts.title && (
                    <Link key={index} href={`/posts/${item.id}`}>
                      <Button
                        style={{
                          display: "flex",
                          background: "#E2E3E4",
                          border: "none",
                          width: " 220px",
                        }}
                        className={styles.button}
                      >
                        <Text
                          ellipsis={
                            {
                              // rows: 1,
                              // expandable: false,
                            }
                          }
                          style={{
                            color: "black",
                            fontWeight: "400",
                          }}
                          className={styles.buttonText}
                        >
                          {item.title}
                        </Text>
                      </Button>
                    </Link>
                  )
                );
              })}
            </div>
          </Col>
        </Row>
      ) : (
        <Row justify="center">
          <Col>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#FF5959"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </Col>
        </Row>
      )}
    </>
  );
};
// export async function getServerSideProps(context) {
//   const { query } = context;
//   return { props: { query } };
// }

export default PostDetail;
