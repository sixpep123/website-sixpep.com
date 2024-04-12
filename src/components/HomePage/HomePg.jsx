import React from "react";
import Navbar from "../Navbar/Navbar";
import "./HomePg.css";

import TopCard from "./Cards/TopCard";

const HomePg = () => {
  return (
    <div className="topcard">
      <div className="darkbg">
        <Navbar />
        <TopCard />
      </div>
    </div>
  );
};

export default HomePg;
