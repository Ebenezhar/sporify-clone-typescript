import { useRef, useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import ArtistCard from "./ArtistCard";
import Card from "./Card";
function Search() {
  let [inpSuggestions, setInpSuggestion] = useState([]);
  let [artists, setArtist] = useState([]);
  let [tracks, stTracks] = useState([]);

  let searchref: any = useRef();

  const option1 = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/auto-complete",
    params: { term: "", locale: "en-US" },
    headers: {
      "X-RapidAPI-Key": "f03b85a937mshae7785d707da46ep1f02ccjsn889fd26b6c51",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  const option2 = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/search",
    params: { term: "", locale: "en-US", offset: "0", limit: "5" },
    headers: {
      "X-RapidAPI-Key": "f03b85a937mshae7785d707da46ep1f02ccjsn889fd26b6c51",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  let fetchOutput = (option: any) => {
    axios
      .request(option)
      .then(function (response) {
        setArtist(response.data.artists.hits);
        stTracks(response.data.tracks.hits);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  let fetchData = async (option: any) => {
    await axios
      .request(option)
      .then(function (response) {
        setInpSuggestion(response.data.hints);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  let handleChange = () => {
    option1.params.term = searchref.current.value;
    fetchData(option1);
  };

  let handleSubmit = (e: any) => {
    e.preventDefault();
    option2.params.term = searchref.current.value;
    fetchOutput(option2);
    // console.log("Hello");
  };

  return (
    <div className="col">
      <div className="p-1">
        <form
          onSubmit={handleSubmit}
          className="form-inline d-flex justify-content-between col"
        >
          <input
            id="suggestion"
            list="suggestions"
            ref={searchref}
            onChange={handleChange}
            className="form-control mx-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <datalist id="suggestions">
            {inpSuggestions &&
              inpSuggestions.map((suggestion: any) => {
                return <option value={suggestion.term} />;
              })}
          </datalist>
          <button type="submit" className="btn btn-dark">
            <AiOutlineSearch />
          </button>
        </form>
      </div>
      <div className="col">
        <div className="border-bottom border-dark py-2 mb-5" id="album">
          <h4 className="px-1 fw-bold">Artist</h4>
          <div className="d-flex flex-wrap justify-content-start">
            {artists.map((artist) => {
              return <ArtistCard data={artist} />;
            })}
          </div>
        </div>
        <div className="border-bottom border-dark py-2 mb-5" id="album">
          <h4 className="px-1 fw-bold">Tracks</h4>
          <div className="d-flex flex-wrap justify-content-start">
            {tracks.map((track) => {
              return <ArtistCard data={track} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
