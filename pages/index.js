import styles from "../styles/Home.module.css";
import BlogComponent from "../components";
import Drawer from "../components/Drawer";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={13} offset={1}>
          <BlogComponent />
        </Col>
        <Col span={8} offset={2}>
          <Drawer />
        </Col>
      </Row>
    </div>
  );
}
