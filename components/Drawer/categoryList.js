import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import Link from "next/link";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import styles from "../components.module.css";

const CategoryList = ({ searchData, Posts, setFilterCategory }) => {
  const { Paragraph } = Typography;

  const [count, setCount] = useState([]);
  const [allPost, setAllPost] = useState([
    "eee",
    "bilisim",
    "blog",
    "yalnız",
    "yazmaya ",
    "bana ",
    "Yaşadığın ",
    "bana ",
    "doldurduğum",
    "günlük",
    "yalnız",
    "bilisim",
    "yazılım",
  ]);

  const [newPost, setNewPost] = useState([]);

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
    // const children1 = await Posts?.map((categr) => categr.category);
    // console.log(children1, "ggg");
    // const children = await children1?.flat();
    // console.log(children, "ggg");

    for (let i = 0; i < allPost?.length; i++) {
      console.log("ss");
      if (newPost.length === 0) {
        console.log("jjj", i, allPost[i]);
        newPost.push(allPost[i]);
      } else {
        // newPost.find((aa) => {
        //   aa !== allPost[];
        //   newPost.push(allPost[i]);
        // });

        console.log(newPost);
      }

      // console.log("for", allPost.length);
      //
      // if (allPost.length === 0) {
      //   allPost.push(children[i]);
      //   console.log(children[i], i, allPost, "ttt");
      // } else {
      //   const aa = children.filter((x) => {
      //     console.log(x, "xx");
      //     x !== allPost[i];
      //     setNewPost(x);
      //   });
      //
      //   console.log(newPost, "aaa");
      // }
    }
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
