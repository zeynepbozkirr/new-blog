import styles from "../styles/Home.module.css";
import BlogComponent from "../components";
import Drawer from "../components/Layout/drawer";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.progress}
        style={{
          scaleX: scrollYProgress,
        }}
      />
      <BlogComponent />
    </div>
  );
}
