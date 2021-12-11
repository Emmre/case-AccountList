import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Content, Grid } from "./elements/styled";
import Login from "./Pages/Login";
import Shopping from "./Pages/Shopping";

const App = () => {
  return (
    <Grid>
      <Content>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/myList" element={<Shopping />} />
        </Routes>
      </Content>
      <Navbar/>
    </Grid>
  );
};

export default App;
