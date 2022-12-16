import React from "react";
import AboutComp from "../components/About";
import style from "../styles/Home.module.css";
import useWindowSize from "../Hooks/useWindowSize";

const About = () => {
  const { width, height } = useWindowSize();
  return (
    <div className={style.About} style={{ height: height - 55 }}>
      <AboutComp />
    </div>
  );
};

export default About;
