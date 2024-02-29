import React from "react";
import "../home/home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/tables/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title={"Last 6 Months (Revenue)"} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transections</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
