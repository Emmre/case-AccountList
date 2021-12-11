import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Content, Grid } from "./elements/styled";
import Login from "./Pages/Login";
import Shopping from "./Pages/Shopping";

const App = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Grid>
      <Content>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/myList" element={<Shopping />} />
        </Routes>
      </Content>
      <Navbar position={path === "/"} />
    </Grid>
  );
};

export default App;
