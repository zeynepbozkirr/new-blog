import { Button, Card, Col, Input, Row } from "antd";

import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const PostDetail = ({ posts }) => {
  console.log(posts, "ppp");
  return (
    <div>
      <Row>
        {posts}
        aaa
      </Row>
    </div>
  );
};

export default PostDetail;

export const getStaticPaths = async () => {
  const snapshot = await getDocs(collection(db, "Posts"));
  console.log(snapshot, "ss");
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { id: doc.id.toString() },
    };
  });
  console.log(paths, "ğğğ");

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const docRef = doc(db, "Posts", id);
  const docSnap = await getDoc(docRef);
  console.log(docSnap);

  return {
    props: {
      posts: JSON.stringify(docSnap.data()) || null,
    },
  };
};
