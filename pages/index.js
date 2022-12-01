import styles from "../styles/Home.module.css";
import BlogComponent from "../components";
import Drawer from "../components/Drawer";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <div className={styles.container}>
      <Row>
        <Col md={14} xs={14} offset={1}>
          <BlogComponent />
        </Col>
        <Col md={6} xs={24} offset={2}>
          <Drawer />
        </Col>
      </Row>
    </div>
  );
}
