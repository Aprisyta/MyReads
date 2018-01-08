import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class HomePage extends Component{
  render(){
   const shelfs = ["Currently Reading", "Want to Read", "Read"]
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {
          shelfs.map((shelf) => (
            <BookShelf shelfTitle={shelf} />
          ))
        }
        <div className="open-search">
          <Link to='/search_books'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default HomePage
