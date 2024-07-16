import React from "react";
import Nav from "../../components/Layout/Nav";
import PostNav from "./components/Layout/PostNav";

const PostPage: React.FC = () => {
  return (
    <div>
      <Nav />
      <PostNav />
    </div>
  );
};

export default PostPage;
