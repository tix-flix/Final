import React from 'react'
import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Main from './Pages/Main/Main'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Else from './Pages/Else/Else'


function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Else/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App