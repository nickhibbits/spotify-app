import { useState, useEffect } from "react";
import { accessToken, getCurrentUserProfile, logout } from "./spotify";
import { catchErrors } from "./utils";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import styled from "styled-components/macro";

import Container from "./Container";
import UserInfo from "./UserInfo";
import ScrollToTop from "./ScrollToTop";
import { GlobalStyle } from "./styles";

const StyledLoginButton = styled.a`
  background-color: green;
  color: white;
  padding: 10px 20px;
  margin: 20px auto;
  border-radius: 30px;
  display: inline-block;
`;

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        {!token ? (
          <StyledLoginButton href="http://localhost:8888/login">
            Log in to Spotify
          </StyledLoginButton>
        ) : (
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* need to pass components into 'element' prop on each Route */}
              <Route
                path="/top-artists"
                element={<Container data={"Top Artists"} />}
              />

              <Route
                path="/top-tracks"
                element={<Container data={"Top Tracks"} />}
              />

              <Route
                path="/playlists/:id"
                element={<Container data={"Playlist by Id"} />}
              />

              <Route
                path="/playlists"
                element={<Container data={"Playlists"} />}
              />

              <Route path="/" element={<UserInfo profile={profile} />} />
            </Routes>
          </BrowserRouter>
        )}
      </header>
    </div>
  );
}

export default App;
