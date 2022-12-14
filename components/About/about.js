import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { TypeAnimation } from "react-type-animation";
import styles from "./about.module.css";
const { Text } = Typography;

const AboutMe = () => {
  return (
    <div className={styles.about}>
      <Card
        className={styles.card}
        cover={
          <div>
            <img
              className={styles.image}
              style={{ borderRadius: "50%" }}
              alt="example"
              src="/about/bekir.jpeg"
            />
            <div className={styles.title}>
              <Text className={styles.titleText}>I`m &nbsp;</Text>
              <TypeAnimation
                sequence={[
                  "Bekir Yetim",
                  1000,
                  "Frontend developer",
                  1000,
                  "Mobile developer",
                  1000,
                ]}
                cursor={false}
                speed={50}
                className={styles.titleTypeAnimation}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
          </div>
        }
      >
        <div>
          <TypeAnimation
            sequence={[
              1000,
              "    Merhaba, 9 Eylül Üniversitesinde okuduğum bölümle yazılım serüvenime\n" +
                " başladım. Şu anda 24 yaşında ve 3 yıllık çalışma deneyimine sahibim.\n" +
                "          Değişime ve yeniliğe açık, araştırmacı ve azimli bir kişiliğe sahibim.\n" +
                "          Şu anda mobil uygulama geliştirme alanında çalışıyorum. Kariyerimin\n" +
                "          bundan sonraki döneminde front end developer olarak devam etmek\n" +
                "          istiyorum.",
              2000,
            ]}
            cursor={false}
            speed={80}
            className={styles.content}
            wrapper="div"
          />
        </div>
      </Card>
    </div>
  );
};

export default AboutMe;
