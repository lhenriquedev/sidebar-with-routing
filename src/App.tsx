import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

import { Helmet } from "react-helmet";
import { Layout } from "./components/Layout";
import { MainRoutes } from "./Routes";

import { BrowserRouter } from "react-router-dom";

export const ThemeContext = createContext<any>(null);

function App() {
  const [theme, setTheme] = useState();
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        {/* <Helmet>
          <title>Sidebar</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet> */}
        <BrowserRouter>
          <Layout>
            <MainRoutes />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
