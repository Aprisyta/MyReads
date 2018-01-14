import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import HomePage from './HomePage'

const BooksApp = () => {
  return(
    <div>
      <Route exact path="/" component={ HomePage } />
      <Route path="/search" component={ SearchPage } />
    </div>
  )
}

export default BooksApp
