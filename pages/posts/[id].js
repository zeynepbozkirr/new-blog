import { Button, Col, Row, Typography } from "antd";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";
import renderHTML from "react-render-html";
import { useCollection } from "../../Hooks/useCollection";
import Link from "next/link";
import styles from "../../styles/postDetail.module.css";

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
            xs={23}
            sm={23}
            md={15}
            lg={15}
            offset={1}
            style={{ marginTop: "50px" }}
          >
            <Col>
              <Title classNme={styles.title}>{posts.title}</Title>
            </Col>
            <Col>{renderHTML(posts.postContent)}</Col>
            <br /> <br />
            <Col>
              <Text className={styles.date}>Eklenme Tarihi :</Text>
              <Text className={styles.dateItem}>{posts.date}</Text>
            </Col>
            <Col>
              <Text className={styles.readCount}>Okunma Sayısı :</Text>
              <Text className={styles.readCountItem}>{posts.readCount}</Text>
            </Col>
            <Col>
              <Text className={styles.category}>Category :</Text>

              {posts.category.map((item, index) => {
                return (
                  <Text key={index} className={styles.categoryItem}>
                    {item}, &nbsp;
                  </Text>
                );
              })}
            </Col>
          </Col>
          <Col xs={22} sm={22} md={4} lg={4} offset={2}>
            <div className={styles.otherPostTitle}>
              {AllPosts.map((item, index) => {
                return (
                  item.title !== posts.title && (
                    <Link key={index} href={`/posts/${item.id}`}>
                      <Button className={styles.button}>
                        <Text className={styles.buttonText}>{item.title}</Text>
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
export async function getServerSideProps(context) {
  const { query } = context;
  return { props: { query } };
}

export default PostDetail;
