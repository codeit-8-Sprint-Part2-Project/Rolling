import React from "react";
import Nav from "../../components/Layout/Nav";
import PostNav from "./components/Layout/PostNav";
import Posts from "./components/Posts";


const PostPage: React.FC = () => {
  return (
    <div>
      <Nav />
      <PostNav />
      <Posts id="8316" />
    </div>
  );
};

export default PostPage;
