import styles from "../styles/Home.module.css";
import BlogComponent from "../components";
import Drawer from "../components/Drawer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Drawer />
      <BlogComponent />
    </div>
  );
}
