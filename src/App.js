import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import HomePage from './HomePage'

class BooksApp extends Component{

  render(){
    return(
      <div>
        <Route exact path="/" component={ HomePage } />
        <Route path="/search_books" component={ SearchPage } />
      </div>
    )
  }
}

export default BooksApp
