import { useState, useEffect } from 'react'

import './App.css'

import { getData } from './api/ArticlesAPI'

import AppNav from './components/AppNav'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import SectionPage from './pages/SectionPage'

import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  const[articles, setArticles] = useState([])
  
  useEffect( ()=> {
    getData()
    .then((response) => {
      setArticles(response.data.hits)
    })
  },[])

  
  return (
    <div className="App">

      <AppNav />
      <Router> 
        <Routes>
          <Route path='/' element={<HomePage articles = {articles}/>} />
          <Route path='/articles/:articleID' element={<ArticlePage />} />
          <Route path='/sections/:sectionName' element={<SectionPage/> } />

        </Routes>
      </Router>   
  
    </div>
  )
}

export default App