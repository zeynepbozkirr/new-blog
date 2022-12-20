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

const { Paragraph, Title, Text } = Typography;

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
          <Col md={14} xs={14} offset={1} style={{ marginTop: "50px" }}>
            <Col>
              <Title>{posts.title}</Title>
            </Col>
            <Col>{renderHTML(posts.postContent)}</Col>
            <Col style={{ textAlign: "end", marginTop: "30px" }}>
              <Text style={{ color: "#FF5959", fontWeight: "bold" }}>
                Bekir Yetim
              </Text>{" "}
              <br />
            </Col>
            <Col>
              <Text style={{ color: "#989DA2", fontWeight: "bold" }}>
                Eklenme Tarihi :{" "}
              </Text>
              <Text style={{ color: "#FF5959" }}>{posts.date}</Text>
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

              {posts.category.map((item) => {
                return <Text style={{ color: "#FF5959" }}>{item} </Text>;
              })}
            </Col>
          </Col>
          <Col md={6} xs={24} offset={2}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // marginTop: "50px",
                height: "400px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {AllPosts.map((item) => {
                return (
                  item.title !== posts.title && (
                    <Link href={`/posts/${item.id}`}>
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
                          ellipsis={{
                            rows: 1,
                            // expandable: false,
                          }}
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
              color="#9E7676"
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
export async function getServerSideProps(context) {
  const { query } = context;
  return { props: { query } };
}

export default PostDetail;
