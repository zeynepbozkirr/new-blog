import { Row } from "antd";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThreeCircles, ThreeDots } from "react-loader-spinner";

const PostDetail = ({ props }) => {
  const [postsd, setPostsd] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const fetching = async () => {
    const docRef = doc(db, "Posts", id);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data();
    setPostsd(docData);
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      {postsd ? (
        <div>
          <Row>{postsd.Date}</Row>
        </div>
      ) : (
        <div>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#2A3990"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
};
export async function getServerSideProps(context) {
  const { query } = context;
  return { props: { query } };
}

export default PostDetail;
