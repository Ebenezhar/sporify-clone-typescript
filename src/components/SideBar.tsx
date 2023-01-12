import React from "react";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
import { Link } from "react-router-dom";

function SideBar() {
  let anchorStyle = {
    color: "inherit",
    "text-decoration": "none",
  };
  return (
    <>
      <Link
        style={anchorStyle}
        to={"/portal"}
        className="d-flex col justify-content-lg-start justify-content-sm-center active"
      >
        <p className="p-1">
          <FaHome />
        </p>
        <p className="p-1 fw-bold d-none d-lg-block">Home</p>
      </Link>
      <Link
        to={"/portal/search"}
        style={anchorStyle}
        className="d-flex col justify-content-lg-start justify-content-sm-center"
      >
        <p className="p-1">
          <FiSearch />
        </p>
        <p className="p-2 fw-bold d-none d-lg-block">Search</p>
      </Link>
      <Link
        to={"/portal/favourites"}
        style={anchorStyle}
        className="d-flex col justify-content-lg-start justify-content-sm-center"
      >
        <p className="p-1">
          <AiFillStar />
        </p>
        <p className="p-2 fw-bold d-none d-lg-block ">Favourites</p>
      </Link>
      <Link
        to={"/portal/playlist"}
        style={anchorStyle}
        className="d-flex col justify-content-lg-start justify-content-sm-center"
      >
        <p className="p-1">
          <BsMusicNoteList />
        </p>
        <p className="p-2 fw-bold d-none d-lg-block">Play List</p>
      </Link>
    </>
  );
}

export default SideBar;
