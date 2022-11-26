import { Button, Card, Col, Input, Row } from "antd";
import { useCollection } from "../../Hooks/useCollection";
import Link from "next/link";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PostDetail = ({ posts }) => {
  console.log(posts, "p");
  return (
    <div>
      <Row>aaa</Row>
    </div>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const snapshot = await getDocs(collection(db, "Posts"));
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { id: doc.id },
    };
  });
  console.log(paths, "ğğğ");

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;

  const docRef = doc(db, "Posts", id);

  const docSnap = await getDocs(docRef);
  console.log(docSnap);

  return {
    props: {
      posts: "docSnap",
    },
  };
}
