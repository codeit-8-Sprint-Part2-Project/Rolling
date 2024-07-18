import React from "react";
import Nav from "../../components/Layout/Nav";
import PostNav from "./components/Layout/PostNav";
import Posts from "./components/Posts";
import { useParams } from "react-router-dom";


const PostPage: React.FC = () => {
  
  const { recipientId } = useParams() as { recipientId: string };

  return (
    <div>
      <Nav />
      <PostNav />
      <Posts id={recipientId} />
    </div>
  );
};

export default PostPage;
