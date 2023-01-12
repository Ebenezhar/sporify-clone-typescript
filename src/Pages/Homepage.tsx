import SideBar from "../components/SideBar";
import { BsSpotify } from "react-icons/bs";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="row">
      <div
        style={{ width: "15%", position: "sticky", top: "0" }}
        className="col-sm-3 col-md-2 bg-dark text-success py-5 px-3 vh-100"
      >
        <SideBar />
      </div>

      <div
        style={{ width: "80%" }}
        className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main p-3 mx-10"
      >
        <header className="d-flex justify-content-center">
          <h1>
            <BsSpotify />
          </h1>
          <h1 className="p-1">Spotify</h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
