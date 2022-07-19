import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/index";
import GlobalStyle from "./styles/global";

export const App = () => {
  return(
  <Router>
    <GlobalStyle/>
    <Routes/>
  </Router>
  )
}