import React from "react";
import BestRecipient from "./components/BestRecipient";
import AllRecipient from "./components/AllRecipient";

const ListPage: React.FC = () => {
  return (
    <div>
      <BestRecipient />
      <AllRecipient />
    </div>
  );
};

export default ListPage;