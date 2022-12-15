import Drawer from "../components/Drawer";
import { Col, Input, Row } from "antd";
import Posts from "../components/Posts";
import { useCollection } from "../Hooks/useCollection";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import style from "../styles/Home.module.css";
import { SearchOutlined } from "@ant-design/icons";

export default function Home() {
  const { documents: AllPosts } = useCollection("posts");
  const [filterCategory, setFilterCategory] = useState();

  return (
    <div className="App">
      {AllPosts ? (
        <Row>
          <Col md={15} xs={24}>
            <Posts
              filterCategory={filterCategory}
              setFilterCategory={(x) => setFilterCategory(x)}
            />
          </Col>
          <Col md={6} xs={24} offset={2}>
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
