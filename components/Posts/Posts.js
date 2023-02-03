import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { useCollection } from "../../Hooks/useCollection";
import Link from "next/link";
import { Typography } from "antd";
const { Text, Title } = Typography;
import styles from "./post.module.css";
import ReactPaginate from "react-paginate";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import parse from "html-react-parser";

const Posts = ({ filterCategory, setFilterCategory }) => {
  const parse = require("html-react-parser");

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

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(Posts?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayUsers = filterCategory
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((post, index) => {
      return (
        <Col
          key={index}
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className={styles.container}
        >
          <Col className={styles.colDate}>
            <Col style={{ width: "100%" }}>
              <Text className={styles.date}>
                {post.date} - {post.category[0]}
                {post.category[1] ? ` - ${post.category[1]}` : null}
              </Text>
              <Link
                href={`/posts/${post.id}`}
                onClick={() => ReadCount(post.id)}
              >
                <h5 className={styles.title}> {post.title}</h5>
              </Link>
              <Col className={styles.descCol}>
                <Text className={styles.desc}>
                  {parse(post.postContent.substring(0, 150).concat("..."))}
                </Text>
              </Col>
            </Col>
          </Col>
        </Col>
      );
    });

  return (
    <Row>
      <Col className="App">{displayUsers}</Col>
      <Col className={styles.pageNumberCol}>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </Col>
    </Row>
  );
};

export default Posts;
