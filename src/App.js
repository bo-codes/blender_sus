import React from "react";
import { Route, Routes } from "react-router-dom";
import SimpleGallery from "./SimpleGallery";
import './App.css'

function App() {
  return (
    <div id="main-div">
      <Routes>
        <Route path="/" exact element={<SimpleGallery />}/>
      </Routes>
    </div>
  );
}

export default App;
