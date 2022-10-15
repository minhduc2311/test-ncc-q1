import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Home;
