// import { KeycloakClient } from '@react-keycloak/keycloak-ts';
// import { ReactKeycloakProvider } from '@react-keycloak/web';
// import { Login } from 'keycloak-react-theming';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Favourites from "./components/Favourites";
import Search from "./components/Search";
// import Keycloak from './KeyCloak/KeyCloak';
import Home from "./Pages/Homepage";
import Login from "./Pages/Login";
// import {keycloakPagesContext} from 'keycloak-react-theming'

function App() {
  return (
    <div className="col-lg-12 vh-100 bg-success">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portal" element={<Home />}>
            <Route path="/portal" element={<DashBoard />} />
            <Route path="/portal/favourites" element={<Favourites />} />
            <Route path="/portal/search" element={<Search />} />
            <Route path="/portal/playlist" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
