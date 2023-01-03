import Drawer from "../components/Drawer";
import { Col, Row } from "antd";
import Posts from "../components/Posts";
import { useCollection } from "../Hooks/useCollection";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Home() {
  const { documents: AllPosts } = useCollection("posts");
  const [filterCategory, setFilterCategory] = useState();

  return (
    <div className="App">
      {AllPosts ? (
        <Row>
          <Col xs={24} sm={24} md={16} lg={16}>
            <Posts
              filterCategory={filterCategory}
              setFilterCategory={(x) => setFilterCategory(x)}
            />
          </Col>
          <Col xs={22} sm={22} md={5} lg={5} offset={1}>
            <Drawer
              filterCategory={filterCategory}
              setFilterCategory={(x) => setFilterCategory(x)}
            />
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
    </div>
  );
}
