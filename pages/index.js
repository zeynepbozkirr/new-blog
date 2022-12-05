import styles from "../styles/Home.module.css";
import Drawer from "../components/Drawer";
import { Col, Row } from "antd";
import Posts from "../components/Posts";
import { useCollection } from "../Hooks/useCollection";
import { useState } from "react";

export default function Home() {
  const [filterCategory, setFilterCategory] = useState();

  return (
    <div className={styles.container}>
      <Row>
        <Col md={14} xs={14} offset={1}>
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
    </div>
  );
}
