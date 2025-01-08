import React from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Header } from './Components/Header'
import { Categories } from './Components/categories'
import { Destinations } from './Components/Destinations'
import { BookingSec } from './Components/BookingSec'

function App() {

  return (
    <>
     <Navbar/>
     <Header/>
     <Categories/>
     <Destinations/>
     <BookingSec/>
    </>
  )
}

export default App
