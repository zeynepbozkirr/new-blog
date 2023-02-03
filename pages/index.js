import Drawer from "../components/Drawer";
import { Col, Row } from "antd";
import Posts from "../components/Posts/Posts";
import { useCollection } from "../Hooks/useCollection";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import useWindowSize from "../Hooks/useWindowSize";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { width, height } = useWindowSize();

  const { documents: AllPosts } = useCollection("posts");
  const [filterCategory, setFilterCategory] = useState();

  return (
    <div className="App">
      {AllPosts ? (
        <Row className={styles.home}>
          <Col
            xs={{ span: 22, offset: 2 }}
            sm={{ span: 22, offset: 2 }}
            md={{ span: 14, offset: 2 }}
            lg={{ span: 14, offset: 2 }}
          >
            <Posts
              filterCategory={filterCategory}
              setFilterCategory={(x) => setFilterCategory(x)}
            />
          </Col>
          <Col
            className={styles.drawerCol}
            xs={22}
            sm={22}
            md={{ span: 7, offset: 1 }}
            lg={{ span: 7, offset: 1 }}
          >
            <Drawer
              filterCategory={filterCategory}
              setFilterCategory={(x) => setFilterCategory(x)}
            />
          </Col>
        </Row>
      ) : (
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
          }}
        >
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="gray"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </Col>
      )}
    </div>
  );
}
