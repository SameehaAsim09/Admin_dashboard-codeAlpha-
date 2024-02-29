import React, { useContext } from "react";
import "../sidebar/sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <spaan className="logo">Dashboard</spaan>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <DashboardIcon className="icons" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <PeopleAltOutlinedIcon className="icons" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/product" style={{ textDecoration: "none" }}>
              <CategoryOutlinedIcon className="icons" />
              <span>Products</span>
            </Link>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <StackedLineChartIcon className="icons" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icons" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <PsychologyAltOutlinedIcon className="icons" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icons" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <SupervisedUserCircleOutlinedIcon className="icons" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icons" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => {
            dispatch({ type: "LIGHT" });
          }}
        ></div>
        <div
          className="colorOptions"
          onClick={() => {
            dispatch({ type: "DARK" });
          }}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
