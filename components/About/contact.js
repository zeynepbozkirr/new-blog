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
  // const [openToggle, setOpenToggle] = useState();
  // const navClassNames = openToggle ? "menu" : "toggle";
  //
  // const ref = useRef(null);
  //
  // useEffect(() => {}, []);
  //

  const toggle = document.querySelector(".navbar");
  document.querySelector(".toggle").onClick = () => {
    document.querySelector(".menu").classList.toggle("active");
  };

  return (
    <>
      <Card className={styles.menu}>
        <div className="toggle">
          <ShareAltOutlined />
        </div>
        <li className="--i:0, --clr:#1877f2">
          <a href="#">
            <GithubOutlined />
          </a>
        </li>
        <li className="--i:1, --clr:#25d366">
          <a href="#">
            <LinkedinOutlined />
          </a>
        </li>
        <li className="--i:2, --clr:#1da1f2">
          <a href="#">
            <TwitterOutlined />
          </a>
        </li>
        <li className="--i:3, --clr:#c32aa2">
          <a href="#">
            <MailOutlined />
          </a>
        </li>
      </Card>
    </>
  );
};

export default ContactMe;
