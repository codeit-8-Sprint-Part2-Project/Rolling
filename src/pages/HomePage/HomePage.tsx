import React from "react";
import Header from "../../components/Layout/Header";
import HomePageMain from "./components/Layout/HomepageMain";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HomePageMain />
    </div>
  );
};

export default HomePage;
