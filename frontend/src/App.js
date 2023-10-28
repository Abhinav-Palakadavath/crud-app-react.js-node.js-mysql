import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import ViewProduct from "./components/ViewProduct";

function App() {
  return (
    <div>
    <BrowserRouter>        
    <Routes>            
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/view' element={<ViewProduct/>}/>
    </Routes>    
  </BrowserRouter>
  </div>
  );
}

export default App;