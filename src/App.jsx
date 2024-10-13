import { useState } from "react"
import Home from "./Home"
import Form from "./Form"
import {Routes, Route} from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/form' element = {<Form/>}/>
      </Routes>
    </>
  )
}

export default App
