import React, { Component , ReactDOM } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component{

  state = {
    query: "",
    books: []
  }

  inputDone = (query) => {
    this.setState({ query: query.trim() })
    this.searchBooks()
  }

  searchBooks = () => {
    BooksAPI.search(this.state.query).then((books) => {
      (typeof books !== "undefined") && this.setState({ books })
    })
  }

  reloadPageAfterChangeOfShelf = () => {
    this.searchBooks()
  }

  render(){
    // console.log(this.state.books)
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.inputDone(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.state.books.map((book) => (
              <li key={book.id}>
                <Book bookObj={book} shelfChange={this.reloadPageAfterChangeOfShelf}/>
              </li>
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage

/*
  NOTES: The search from BooksAPI is limited to a particular set of search terms.
  You can find these search terms here:
  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  However, remember that the BooksAPI.search method DOES search by title or author. So, don"t worry if
  you don"t find a specific author or title. Every search is limited by search terms.
*/
