import React, { useEffect, useState } from "react";
import AboutComp from "../components/About";
import style from "../styles/Home.module.css";
import useWindowSize from "../Hooks/useWindowSize";

const About = () => {
  const { width, height } = useWindowSize();
  const [size, setSize] = useState({});

  const onclick = () => {
    setSize({
      width: width,
      height: height,
    });
  };
  useEffect(() => {
    onclick();
  }, [width, height]);

  return (
    <div
      className={style.About}
      style={{ height: size.width < 768 ? 1100 : size.height }}
    >
      <AboutComp />
    </div>
  );
};

export default About;
