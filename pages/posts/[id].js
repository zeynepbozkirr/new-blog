import { Col, Row, Typography } from "antd";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThreeCircles, ThreeDots } from "react-loader-spinner";
const { Paragraph, Title, Text } = Typography;

const PostDetail = ({ props }) => {
  const [postsd, setPostsd] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const fetching = async () => {
    const docRef = doc(db, "Posts", id);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data();
    setPostsd(docData);
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <Row justify="space-around">
        {postsd ? (
          <Row
            style={{
              margin: "0 75px 0 60px",
            }}
          >
            <Col span={24}>
              <Title style={{ textAlign: "center" }}>{postsd.Title}</Title>
            </Col>
            <Col span={24}>
              <Paragraph style={{}}>{postsd.Text}</Paragraph>
            </Col>
            <Col
              span={24}
              style={{ textAlign: "end", color: "red", marginTop: "30px" }}
            >
              <Text style={{ color: "red" }}>Zeynep Bozkır</Text> <br />
              <Text style={{ color: "red" }}>{postsd.Date}</Text>
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
      </Row>
    </>
  );
};
export async function getServerSideProps(context) {
  const { query } = context;
  return { props: { query } };
}

export default PostDetail;
