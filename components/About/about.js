import React from "react";
import { Card, Typography } from "antd";
import styles from "../components.module.css";
import { TypeAnimation } from "react-type-animation";

const { Paragraph, Text, Title } = Typography;

const AboutMe = () => {
  return (
    <div>
      <Card
        style={{
          backgroundColor: "transparent",
          borderWidth: 0,
          width: "400px",
          // marginRight: "100px",
          marginTop: "40px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        cover={
          <div>
            <img
              style={{ width: "150px", borderRadius: "50%" }}
              alt="example"
              src="/about/bekir.jpeg"
            />
            <div
              style={{
                display: "flex",
                paddingLeft: "80px",

                width: "400px",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 27,
                }}
              >
                I`m &nbsp;
              </Text>
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
                style={{
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: 27,
                  color: "#FED049",
                }}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
          </div>
        }
      >
        <TypeAnimation
          sequence={[
            "    Merhaba, 9 Eylül Üniversitesinde okuduğum bölümle yazılım serüvenime\n" +
              " başladım. Şu anda 24 yaşında ve 3 yıllık çalışma deneyimine sahibim.\n" +
              "          Değişime ve yeniliğe açık, araştırmacı ve azimli bir kişiliğe sahibim.\n" +
              "          Şu anda mobil uygulama geliştirme alanında çalışıyorum. Kariyerimin\n" +
              "          bundan sonraki döneminde front end developer olarak devam etmek\n" +
              "          istiyorum.",
            2000,
          ]}
          cursor={false}
          speed={60}
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
            width: "400px",
          }}
          wrapper="div"
        />
      </Card>
    </div>
  );
};

export default AboutMe;
