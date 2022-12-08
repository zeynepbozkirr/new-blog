import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import Link from "next/link";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import styles from "../components.module.css";

const CategoryList = ({ searchData, Posts, setFilterCategory }) => {
  const { Paragraph } = Typography;

  const onClickCategory = (categ) => {
    const filterCategory = Posts?.filter((post) =>
      post.category.includes(categ.toLocaleLowerCase())
    );
    setFilterCategory(filterCategory);
  };
  const categoryCount = () => {
    const filterCategory = Posts?.filter((post) =>
      post.category.includes(categ.toLocaleLowerCase())
    );
    setFilterCategory(filterCategory);
  };

  return (
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
              {Posts?.map((pos) => (
                <Paragraph>
                  {pos.category?.map((categ) => (
                    <Paragraph
                      ellipsis={{
                        rows: 1,
                        expandable: false,
                      }}
                    >
                      <Button
                        className={styles.categoryButton}
                        onClick={() => onClickCategory(categ)}
                      >
                        {categ}
                      </Button>
                    </Paragraph>
                  ))}
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
