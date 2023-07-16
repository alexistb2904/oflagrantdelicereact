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

const StyledGlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #fffcf1;
    padding: 0 5%;
  }
`;

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledGlobalStyle />
      <Navigation />
      <Header />
      <Menu />
      <Location />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
