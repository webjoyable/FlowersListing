import React from "react";
import AppRouter from "./Routes";
import CurrentUserProvider from "./contexts/currentUser.context";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CurrentUserProvider>
        <AppRouter />
      </CurrentUserProvider>
    </ThemeProvider>
  );
}

export default App;
