import React from "react";
import "../featured/featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="features">
      <div className="top">
        <div className="title">
          <h1>Total Revenue</h1>
        </div>
        <MoreVertIcon fontSize="20px" />
      </div>
      <div className="bottom">
        <div className="featureChart">
          <CircularProgressbar value={65} text={"65%"} strokeWidth={5} />
        </div>
        <p className="title">Total Sales Today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous tansection processing. Last payment may not included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResults positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultamount">$12.6k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResults negetive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultamount">$7.43k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResults positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultamount">$10.6k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
