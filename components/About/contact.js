import React, { useEffect, useRef, useState } from "react";
import { Card, Typography } from "antd";
import styles from "../components.module.css";
const { Paragraph, Text, Title } = Typography;
import { Helmet } from "react-helmet";
import {
  ShareAltOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  MailOutlined,
} from "@ant-design/icons";

const ContactMe = () => {
  const [openToggle, setOpenToggle] = useState(true);
  const [openTogglea, setOpenTogglea] = useState();

  // const navClassNames = openToggle ? "menu" : "toggle";
  //
  // const ref = useRef(null);
  //
  // useEffect(() => {}, []);
  //

  // const toggle = document.querySelector(".navbar");
  // document.querySelector(".toggle").onClick = () => {
  //   document.querySelector(".menu").classList.toggle("active");
  // };
  const onclick = () => {
    setOpenToggle(!openToggle);
  };

  return (
    <div className={styles.AboutContact}>
      <div
        className={`${
          openToggle ? `${styles.menu}` : `${styles.menuactive}`
        }  `}
        onClick={() => onclick()}
        // className={styles.menu}
      >
        <div className={styles.toggle} onClick={() => onclick()}>
          <ShareAltOutlined />
        </div>
        <li
          style={{
            transform: "rotate(calc(360deg/4  *0))",
            color: "#9F2D87",
            transitionDelay: "calc(0.05s*0)",
          }}
        >
          <a
            style={{
              transform: "rotate(calc(360deg/4  *0))",
              color: "#9F2D87",
            }}
            href="#"
          >
            <GithubOutlined />
          </a>
        </li>
        <li
          style={{
            transform: "rotate(calc(360deg/4  *1))",
            color: "#1877f2",
            transitionDelay: "calc(0.05s*1)",
          }}
        >
          <a
            href="#"
            style={{
              transform: "rotate(calc(360deg/-4 *1))",
              color: "#1877f2",
            }}
          >
            <LinkedinOutlined />
          </a>
        </li>
        <li
          style={{
            transform: "rotate(calc(360deg/4  *2))",
            color: "#1877f2",
            transitionDelay: "calc(0.05s*2)",
          }}
        >
          <a
            href="#"
            style={{
              transform: "rotate(calc(360deg/-4  *2))",
              color: "#1877f2",
            }}
          >
            <TwitterOutlined />
          </a>
        </li>
        <li
          style={{
            transform: "rotate(calc(360deg/4  *3))",
            color: "#1877f2",
            transitionDelay: "calc(0.05s*3)",
          }}
        >
          <a
            href="#"
            style={{
              transform: "rotate(calc(360deg/-4 * 3))",
              color: "#1877f2",
            }}
          >
            <MailOutlined />
          </a>
        </li>
      </div>
    </div>
  );
};

export default ContactMe;
