import React from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Header } from './Components/Header'
import { Categories } from './Components/categories'
import { Destinations } from './Components/Destinations'

function App() {

  return (
    <>
     <Navbar/>
     <Header/>
     <Categories/>
     <Destinations/>
    </>
  )
}

export default App
