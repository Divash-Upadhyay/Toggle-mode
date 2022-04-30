// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import {Navbar} from "./Components/Body/Navbar";
import { Card } from "./Components/Body/Card"
import { useContext } from 'react';
import { CartContext } from './Contexts/CartContexts';



function App() {
const {color} =useContext(CartContext)
console.log(color)
  return (
    <div id={color ? "black": "white"} >
    
     <Navbar />
    
    <Card />
    </div>
  )
}

export default App
