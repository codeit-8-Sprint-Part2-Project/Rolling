import React from "react";
import Header from "../../components/Layout/Header";
import HomepageMain from "./components/Layout/HomepageMain";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HomepageMain />
    </div>
  );
};

export default HomePage;
