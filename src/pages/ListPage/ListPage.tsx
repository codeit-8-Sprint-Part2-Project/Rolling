import React from "react";
import Header from "../../components/Layout/Header";
import BestRecipient from "./components/BestRecipient";
import AllRecipient from "./components/AllRecipient";

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