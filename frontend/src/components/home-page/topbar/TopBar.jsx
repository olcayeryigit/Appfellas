import React from "react";
import { BiSolidPurchaseTag, BiWorld } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = ({ username }) => {
  return (
    <header className="header d-flex justify-content-between align-items-center pe-4">
      <h4>PLANE SCAPE</h4>

      <a href="/">Home</a>

      <a href="/myFlights">My Flights</a>

      <div className="d-flex gap-3 align-items-center ">
        <div className="d-flex align-items-center">
          <BiSolidPurchaseTag className="icon" />

          <div> Deals</div>
        </div>

        <div className="d-flex align-items-center">
          <BiWorld className="icon" />
          <div> Discover</div>
        </div>

        <div className="d-flex align-items-center">
          <FaRegCircleUser />
          <div> {username}</div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
