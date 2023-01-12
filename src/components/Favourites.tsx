import React from "react";
import { useSelector } from "react-redux/es/exports";
import Card from "./Card";

function Favourites() {
  const { favourites = [] } = useSelector((store) => store.music);
  return (
    <div className="border-bottom border-dark py-2 mb-5" id="album">
      <h4 className="px-1 fw-bold">Tracks</h4>
      <div className="d-flex flex-wrap justify-content-start">
        {favourites &&
          favourites.map((track) => {
            return <Card data={track} />;
          })}
      </div>
    </div>
  );
}

export default Favourites;
