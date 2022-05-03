import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/favorite' element={<FavoritePage/>}/>
    </Routes>
  );
}

export default App;
