import { Col, Row, Typography } from "antd";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";
import Drawer from "../../components/Drawer";

const { Paragraph, Title, Text } = Typography;

const PostDetail = ({ props }) => {
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
      <Row justify="center">
        <Col md={14} xs={14} offset={1} style={{ marginTop: "50px" }}>
          {posts ? (
            <Row
            // style={{
            //   margin: "0 75px 0 60px",
            // }}
            >
              <Col>
                <Title>{posts.title}</Title>
              </Col>
              <Col>
                <Paragraph style={{}}>{posts.postContent}</Paragraph>
              </Col>
              <Col
                style={{ textAlign: "end", color: "red", marginTop: "30px" }}
              >
                <Text style={{ color: "red" }}>Zeynep Bozkır</Text> <br />
              </Col>
            </Row>
          ) : (
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
          )}
        </Col>
        <Col md={6} xs={24} offset={2}>
          <Drawer />
        </Col>
      </Row>
    </>
  );
};
export async function getServerSideProps(context) {
  const { query } = context;
  return { props: { query } };
}

export default PostDetail;
