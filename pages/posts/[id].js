import { Row } from "antd";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PostDetail = ({ props }) => {
  const [postsd, setPostsd] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const fetching = async () => {
    console.log(db, "db");
    console.log(id, "id");

    if (router.isReady) {
      const docRef = doc(db, "Posts", id);
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data();
      setPostsd(docData);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      <Row>
        {postsd?.Date}
        aaa
      </Row>
    </div>
  );
};
export async function getServerSideProps(context) {
  const { query } = context;
  return { props: { query } };
}

export default PostDetail;
