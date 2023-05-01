import React from 'react'
import './App.css'
import Header from './Components/Shared/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}

export default App
