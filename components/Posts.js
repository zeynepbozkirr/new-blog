import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { useCollection } from "../Hooks/useCollection";
import Link from "next/link";
import { Typography } from "antd";
const { Paragraph, Text, Title } = Typography;
import styles from "./components.module.css";
import { ReadOutlined } from "@ant-design/icons";
import ReactPaginate from "react-paginate";

const Posts = ({ filterCategory, setFilterCategory }) => {
  const { documents: Posts } = useCollection("posts");
  useEffect(() => {
    setFilterCategory(Posts);
  }, [Posts]);

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(Posts?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayUsers = filterCategory
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((post) => {
      return (
        <Row>
          <Col span={24}>
            <div style={{ marginTop: "50px" }}>
              <Title
                style={{ width: "500px", color: "white" }}
                length="2"
                ellipsis={{
                  rows: 1,
                  expandable: false,
                }}
              >
                {post.title}
              </Title>

              <Text style={{ color: "#BA94D1" }}>
                <ReadOutlined style={{ color: "white" }} />
                &nbsp; 615 okunma &nbsp; - &nbsp;
              </Text>
              <Text style={{ color: "#BA94D1" }}>{post.date}</Text>

              <br />
              <Text style={{ color: "#BA94D1" }}>
                {post.category[0]} - {post.category[1]}
              </Text>
              <Paragraph
                style={{ width: "500px", marginTop: "10px", color: "white" }}
                ellipsis={{
                  rows: 4,
                  expandable: false,
                }}
              >
                {post.postContent}
              </Paragraph>
              <Link
                style={{
                  display: "flex",
                  color: "#9E7676",
                }}
                href={`/posts/${post.id}`}
              >
                <Button className={styles.button}>
                  <Text className={styles.buttonText}>Read More {`>>`}</Text>
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
