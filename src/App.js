import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/styles/main.css"
function App() {
  return (
    <>
      <Header />
      <main>
        <Dish
          Name="Tacos à l’unité"
          Price="3€"
          Picture="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
        />
        <Dish
          Name="Enchiladas"
          Price="12€"
          Picture="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
        />
        <Dish
          Name="Mole poblano"
          Price="15€"
          Picture="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
