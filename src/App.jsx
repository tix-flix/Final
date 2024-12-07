import React from 'react'
import Layout from './components/Layout/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import Main from './Pages/Main/Main'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Else from './Pages/Else/Else'
import Personal from './Pages/Personal/Personal'
import PageOne from './Pages/Personal/PageOne'
import PageTwo from './Pages/Personal/PageTwo'
import PageThree from './Pages/Personal/PageThree'


function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/:myId' element={<Personal/>}>
          <Route path='PageOne' element={<PageOne/>}/>
          <Route path='PageTwo' element={<PageTwo/>}/>
          <Route path='PageThree' element={<PageThree/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Else/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App