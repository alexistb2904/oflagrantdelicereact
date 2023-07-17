import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Footer from "./components/Footer";
import { ThemeProvider } from "./utils/context";
import { useTheme } from "./utils/hooks";

const StyledGlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) =>
      theme === "light" ? "#fffcf1" : "#28292c"};
    padding: 1% 5%;
    transition: 0.5s ease;
  }
`;

function GlobalStyle() {
  const { theme } = useTheme();

  return <StyledGlobalStyle theme={theme} />;
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Navigation />
        <Header />
        <Menu />
        <Location />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
