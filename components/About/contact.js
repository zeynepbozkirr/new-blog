import React, { useEffect, useState } from "react";
import styles from "./about.module.css";
import Mail from "../../public/contact/mail.svg";
import Medium from "../../public/contact/medium.svg";
import Stackoverflow from "../../public/contact/stackoverflow.svg";
import Github from "../../public/contact/github.svg";
import Twitter from "../../public/contact/twitter.svg";
import Linkedin from "../../public/contact/linkedin.svg";
import Share from "../../public/contact/share.svg";

const ContactMe = () => {
  const [openToggle, setOpenToggle] = useState(true);
  const onclick = () => {
    setOpenToggle(!openToggle);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpenToggle(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.contact}>
      <div className={openToggle ? styles.menu : styles.menuactive}>
        <div className={styles.toggle} onClick={() => onclick()}>
          <Share onClick={() => onclick()} />
        </div>
        <li
          style={{
            transform: "rotate(calc(360deg/6  *0))",
            transitionDelay: "calc(0.15s*0)",
          }}
        >
          <a
            style={{
              transform: "rotate(calc(360deg/-6  *0))",
              color: "black",
              // background: "transparent",
            }}
            href="https://github.com/bekirytm"
          >
            <Github />
          </a>
        </li>
        <li
          style={{
            transform: "rotate(calc(360deg/6  *1))",
            color: "#1877f2",
            transitionDelay: "calc(0.15s*1)",
          }}
        >
          <a
            href="https://twitter.com/bekirytm?s=11&t=xlg4VXOWjZG_S9BE8PevPQ"
            style={{
              transform: "rotate(calc(360deg/-6 *1))",
              color: "#1877f2",
            }}
          >
            <Twitter />
          </a>
        </li>
        <li
          style={{
            transform: "rotate(calc(360deg/6  *2))",
            color: "#1877f2",
            transitionDelay: "calc(0.15s*2)",
          }}
        >
          <a
            href="#"
            style={{
              transform: "rotate(calc(360deg/-6 *2))",
              color: "#1877f2",
            }}
          >
            <Mail />
          </a>
        </li>
        <li
          style={{
            transform: "rotate(calc(360deg/6  *3))",
            color: "#1877f2",
            transitionDelay: "calc(0.15s*3)",
          }}
        >
          <a
            href="https://www.linkedin.com/in/bekir-yetim-7b00b3181/"
            style={{
              transform: "rotate(calc(360deg/-6 * 3))",
              color: "#1877f2",
            }}
          >
            <Linkedin />
          </a>
        </li>
        <li
          style={{
            transform: "rotate(calc(360deg/6  *4))",
            color: "#1877f2",
            transitionDelay: "calc(0.15s*4)",
          }}
        >
          <a
            href="https://medium.com/@bekir.ytm"
            style={{
              transform: "rotate(calc(360deg/-6 * 4))",
              color: "#1877f2",
            }}
          >
            <Medium />
          </a>
        </li>
        <li
          style={{
            transform: "rotate(calc(360deg/6  *5))",
            color: "#1877f2",
            transitionDelay: "calc(0.15s*5)",
          }}
        >
          <a
            href="https://stackoverflow.com/users/12003912/bekirytm"
            style={{
              transform: "rotate(calc(360deg/-6 * 5))",
              color: "#1877f2",
            }}
          >
            <Stackoverflow />
          </a>
        </li>
      </div>
    </div>
  );
};

export default ContactMe;
