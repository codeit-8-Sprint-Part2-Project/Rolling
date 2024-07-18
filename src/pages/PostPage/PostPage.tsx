import React from "react";
import PostNav from "./components/Layout/PostNav";
import Posts from "./components/Posts";
import { useParams } from "react-router-dom";

const PostPage: React.FC = () => {
  const { productid } = useParams() as { productid: string };

  return (
    <div>
      <PostNav />
      <Posts id={productid} />
    </div>
  );
};

export default PostPage;
