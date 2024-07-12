import React from "react";
import Header from "../../components/Layout/Header";
import BestRolling from "./components/BestRolling";
import AllRolling from "./components/AllRolling";

const ListPage: React.FC = () => {
  return (
    <div>
      <Header />
      <BestRolling />
      <AllRolling />
    </div>
  );
};

export default ListPage;
