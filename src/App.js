import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.css";
import Home from '../src/pages/Home.jsx'
import Layout from "./components/Layout.jsx";
function App() {
  return (
    <>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
