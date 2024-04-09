import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.css";
import Home from '../src/pages/Home.jsx'
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home/>}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
