import React from "react";
import Header from "./components/Header";
import AuthPanel from "./components/AuthPanel";
import {
  CircularProgress,
  CssBaseline,
  Grid,
  MuiThemeProvider,
} from "@material-ui/core";
import theme from "./theme";
import TopNavBar from "./components/TopNavBar";
import RestorationCategory from "./components/RestorationCategory";
import TopNav from "./components/TopNav";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <TopNavBar id="navbar__top" title="Dental Procurement Tool" />
      <TopNav />
      <RestorationCategory />
    </MuiThemeProvider>
  );
}

export default App;
