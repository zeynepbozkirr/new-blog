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
import { doc, updateDoc } from "firebase/firestore";
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
        <Row key={post.id}>
          <Col>
            <div style={{ marginTop: "50px", width: "600px" }}>
              <Title
                style={{ width: "500px" }}
                // length="2"
                ellipsis={{
                  rows: 1,
                  expandable: false,
                }}
              >
                {post.title}
              </Title>

              <Text style={{ color: "#989DA2" }}>
                <ReadOutlined style={{ color: "#FF5959" }} />
                &nbsp; {post.readCount}
                &nbsp; - &nbsp;
              </Text>
              <Text style={{ color: "#989DA2" }}>{post.date}</Text>

              <br />
              <Text style={{ color: "#989DA2" }}>
                {post.category[0]}{" "}
                {post.category[1] ? ` - ${post.category[1]}` : null}
              </Text>
              <Paragraph
                style={{ width: "550px", marginTop: "10px" }}
                ellipsis={{
                  rows: 4,
                  expandable: false,
                }}
              >
                {renderHTML(post.postContent)}
              </Paragraph>
              <Link
                style={{
                  display: "flex",
                  color: "#9E7676",
                }}
                href={`/posts/${post.id}`}
              >
                <Button
                  className={styles.button}
                  onClick={() => ReadCount(post.id)}
                >
                  <Text className={styles.buttonText}>Read More</Text>
                  <ArrowRight />
                </Button>
              </Link>
              <hr />
            </div>
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
