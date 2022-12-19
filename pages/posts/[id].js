import { Col, Row, Typography } from "antd";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";
import Drawer from "../../components/Drawer";
import renderHTML from "react-render-html";
import { ReadOutlined } from "@ant-design/icons";
import SearchInput from "../../components/Drawer/searchInput";

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
      {posts ? (
        <Row justify="center">
          <Col md={14} xs={14} style={{ marginTop: "50px" }}>
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
              <Text style={{ color: "#FF5959" }}> 1 okunma</Text>
            </Col>
            <Col>
              <Text style={{ color: "#989DA2", fontWeight: "bold" }}>
                Category :{" "}
              </Text>

              {posts.category.map((item) => {
                return <Text style={{ color: "#FF5959" }}>{item} </Text>;
              })}
            </Col>
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
