import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import Link from "next/link";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import styles from "./drawer.module.css";
import lodash from "lodash";
import { ThreeDots } from "react-loader-spinner";

const CategoryList = ({ searchData, Posts, setFilterCategory }) => {
  const { Paragraph, Text } = Typography;

  const [allArr, setAllArr] = useState([]);
  const [repeatData, setRepeatData] = useState([]);
  const [loading, setLoading] = useState(true);

  const onClickCategory = (pos) => {
    const filterCategory = Posts.filter((post) => {
      let p = [];
      for (let i = 0; i < post.category.length; i++) {
        p.push(post.category[i].toLowerCase().trim());
      }
      if (p.includes(pos)) {
        return post;
      }
    });
    setFilterCategory(filterCategory);
  };

  useEffect(() => {
    categoryCount();
  }, [Posts]);

  const categoryCount = async () => {
    if (Posts !== null) {
      let a = [];
      for (let i = 0; i < Posts?.length; i++) {
        a = [...a, ...Posts[i].category.flat()];
      }
      let c = [];
      for (let j = 0; j < a.length; j++) {
        c.push(a[j].toLowerCase().trim());
      }
      setRepeatData(c);

      const b = _.chain(c).uniq().value();

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
          <Col>
            {searchData?.map((search, i) => (
              <Col key={i}>
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
          </Col>
        ) : (
          <Col>
            <Fade left>
              {allArr?.map((pos, index) => (
                <Paragraph
                  ellipsis={{
                    rows: 1,
                    expandable: false,
                  }}
                  key={index}
                >
                  <Button
                    className={styles.categoryButton}
                    onClick={() => onClickCategory(pos)}
                  >
                    <Text
                      className={styles.categoryText}
                      ellipsis={
                        {
                          // rows: 1,
                          // expandable: false,
                        }
                      }
                    >
                      {pos}
                    </Text>
                    <Text className={styles.categoryText}>
                      ({repeatData.filter((x) => x === pos).length})
                    </Text>
                  </Button>
                </Paragraph>
              ))}
            </Fade>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default CategoryList;
