import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <div>
        <Content />
        </div>
        <div>
        <Footer />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
