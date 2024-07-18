import React from "react";
import BestRecipient from "./components/BestRecipient";
import AllRecipient from "./components/AllRecipient";
import Header from "../../components/Layout/Header";

const ListPage: React.FC = () => {
  return (
    <div>
      <Header />
      <BestRecipient />
      <AllRecipient />
    </div>
  );
};

export default ListPage;