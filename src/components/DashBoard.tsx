import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { addFavourites, removeFavourites } from "../Redux/slice/musicSlice";
import Card from "./Card";

function DashBoard() {
  let [tracks, setTracks] = useState([]);
  let [lists, setList] = useState([]);
  let [favStar, setFavStar] = useState(false);
  const dispatch = useDispatch();

  const { favourites = [] } = useSelector((store) => store.music);

  const fetchList = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/charts/list",
    headers: {
      "X-RapidAPI-Key": "f03b85a937mshae7785d707da46ep1f02ccjsn889fd26b6c51",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };
  const fetchTrack = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/charts/track",
    params: { locale: "en-US", pageSize: "20", startFrom: "0" },
    headers: {
      "X-RapidAPI-Key": "f03b85a937mshae7785d707da46ep1f02ccjsn889fd26b6c51",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  let fetchData = async (meth: any, setMeth: any) => {
    let userData = await axios
      .request(meth)
      .then(function (response) {
        console.log(response.data.tracks);
        setMeth(response.data.tracks);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData(fetchTrack, setTracks);
    fetchData(fetchList, setList);
  }, []);

  let handleFavourites = (name) => {
    let favIndex = favourites.findIndex(
      (favourite: any) => name === favourite.data.title
    );
    if (favIndex) {
      let favtrack = favourites[favIndex];
      dispatch(removeFavourites(favtrack));
      setFavStar(false);
    } else {
      let trackIndex = tracks.findIndex(
        (track: any) => track.data.title === name
      );
      let favtrack = tracks[trackIndex];
      dispatch(addFavourites(favtrack));
      setFavStar(true);
    }
  };

  return (
    <div style={{ position: "relative" }} className="container">
      <div className="col">
        <div className="border-bottom border-dark py-2 mb-5" id="album">
          <h4 className="px-1 fw-bold">Tracks</h4>
          <div className="d-flex flex-wrap justify-content-betwen">
            {tracks &&
              tracks.map((track) => {
                return (
                  <Card
                    data={track}
                    starVal={favStar}
                    handleFavourites={handleFavourites}
                  />
                );
              })}
          </div>
        </div>
        <div className="border-bottom border-dark py-2 mb-5" id="album">
          <h4 className="px-1 fw-bold">List</h4>
          <div className="d-flex flex-wrap justify-content-between">
            {lists &&
              lists.map((list) => {
                return (
                  <Card
                    data={list}
                    starVal={favStar}
                    handleFavourites={handleFavourites}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
