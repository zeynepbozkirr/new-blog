import React from "react";
import { Card, Typography } from "antd";

const { Paragraph, Text, Title } = Typography;

const AboutMe = () => {
  return (
    <div>
      <Card
        style={{
          background: "rgba(187, 191, 202, 0.5)",
          borderRadius: 10,
          borderWidth: 0,
          width: "100%",
          height: "500px",
        }}
      >
        <Text className="About">
          Merhaba, 9 Eylül Üniversitesinde okuduğum bölümle yazılım serüvenime
          başladım. Şu anda 24 yaşında ve 3 yıllık çalışma deneyimine sahibim.
          Değişime ve yeniliğe açık, araştırmacı ve azimli bir kişiliğe sahibim.
          Şu anda mobil uygulama geliştirme alanında çalışıyorum. Kariyerimin
          bundan sonraki döneminde front end developer olarak devam etmek
          istiyorum.
        </Text>
        <br />
        <Text className="About">Bekir Yetim</Text>
      </Card>
    </div>
  );
};

export default AboutMe;
