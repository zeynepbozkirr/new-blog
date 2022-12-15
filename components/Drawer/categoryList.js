import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import Link from "next/link";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import styles from "../components.module.css";
import lodash from "lodash";
import {
  FallingLines,
  Rings,
  ThreeCircles,
  ThreeDots,
} from "react-loader-spinner";

const CategoryList = ({ searchData, Posts, setFilterCategory }) => {
  const { Paragraph, Text } = Typography;

  const [allArr, setAllArr] = useState([]);
  const [repeatData, setRepeatData] = useState([]);
  const [loading, setLoading] = useState(true);

  const onClickCategory = (categ) => {
    const filterCategory = Posts?.filter((post) =>
      post.category.includes(categ.toLocaleLowerCase())
    );
    setFilterCategory(filterCategory);
  };
  useEffect(() => {
    categoryCount();
  }, [Posts]);

  const categoryCount = async () => {
    if (Posts !== null) {
      let a = [];
      for (let i = 0; i < Posts.length; i++) {
        a = [...a, ...Posts[i].category.flat()];
      }
      setRepeatData(a);
      const b = _.chain(a).uniq().value();
      await setAllArr(b);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return loading ? (
    <Row justify={"center"} align={"center"} style={{ marginTop: "100px" }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#FF5959"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Row>
  ) : (
    <div>
      <Row>
        {searchData !== "" ? (
          <div>
            {searchData?.map((search, i) => (
              <Col>
                <Link href={`/posts/${search.id}`}>
                  <Bounce top>
                    <Paragraph
                      ellipsis={{
                        rows: 1,
                        expandable: false,
                      }}
                    >
                      <Button className={styles.categoryButton}>
                        {search.title}
                      </Button>
                    </Paragraph>
                  </Bounce>
                </Link>
              </Col>
            ))}
          </div>
        ) : (
          <div>
            <Fade left>
              {allArr?.map((pos, index) => (
                <Paragraph
                  ellipsis={{
                    rows: 1,
                    expandable: false,
                  }}
                >
                  <Button
                    className={styles.categoryButton}
                    onClick={() => onClickCategory(pos)}
                  >
                    <Text
                      ellipsis={{
                        rows: 1,
                        expandable: false,
                      }}
                    >
                      {pos}
                    </Text>
                    <Text>({repeatData.filter((x) => x === pos).length})</Text>
                  </Button>
                </Paragraph>
              ))}
            </Fade>
          </div>
        )}
      </Row>
    </div>
  );
};

export default CategoryList;
