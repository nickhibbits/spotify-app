import { useState, useEffect } from "react";
import { accessToken, logout } from "./spotify";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Login, Profile, TopArtists, TopTracks } from "./pages";

import ScrollToTop from "./ScrollToTop";
import styled from "styled-components/macro";

const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        {!token ? (
          <Login />
        ) : (
          <>
            <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-tracks" element={<TopTracks />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
