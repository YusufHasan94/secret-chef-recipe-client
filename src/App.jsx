import React from 'react'
import './App.css'
import Header from './Components/Shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Shared/Footer/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
