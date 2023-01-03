import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { useCollection } from "../Hooks/useCollection";
import Link from "next/link";
import { Typography } from "antd";
const { Paragraph, Text, Title } = Typography;
import styles from "./components.module.css";
import { ReadOutlined } from "@ant-design/icons";
import ReactPaginate from "react-paginate";
import ArrowRight from "../public/arrowRight.svg";
import renderHTML from "react-render-html";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

const Posts = ({ filterCategory, setFilterCategory }) => {
  const { documents: Posts } = useCollection("posts");

  useEffect(() => {
    setFilterCategory(Posts);
  }, [Posts]);

  const ReadCount = async (idx) => {
    let index = await Posts.findIndex((item) => item.id === idx);
    let selectedReadCount = Posts[index].readCount;

    const ref = doc(db, "posts", idx);
    setTimeout(async () => {
      await updateDoc(ref, {
        readCount: selectedReadCount + 1,
      });
    }, 2000);
  };

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(Posts?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayUsers = filterCategory
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((post) => {
      return (
        <Row
          className={styles.post}
          style={{
            width: "100%",
          }}
        >
          <Col
            xs={22}
            sm={22}
            md={14}
            lg={14}
            offset={2}
            style={
              {
                // display: "flex",
                // justifyContent: "center",
                // height"100%",
                // border: "solid 1px orange",
              }
            }
          >
            <Title
              ellipsis={{
                rows: 1,
              }}
              className={styles.title}
            >
              {post.title}
            </Title>

            <Text>
              <ReadOutlined style={{ color: "#FF5959" }} />
              <Text style={{ color: "#989DA2" }}>
                &nbsp; {post.readCount}
                &nbsp; - &nbsp;
              </Text>
            </Text>

            <Text style={{ color: "#989DA2" }}>
              {post.date} <br />
            </Text>

            <Text style={{ color: "#989DA2" }}>
              {post.category[0]}
              {post.category[1] ? ` - ${post.category[1]}` : null}
            </Text>

            <Text className={styles.paragraph}>
              {renderHTML(post.postContent.substring(0, 150).concat("..."))}
            </Text>

            <Link href={`/posts/${post.id}`}>
              <Button
                className={styles.button}
                onClick={() => ReadCount(post.id)}
              >
                <Text className={styles.buttonText}>Read More</Text>
                <ArrowRight />
              </Button>
            </Link>
            <hr />
          </Col>
        </Row>
      );
    });

  return (
    <Row>
      <div className="App">
        {displayUsers}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </Row>
  );
};

export default Posts;
