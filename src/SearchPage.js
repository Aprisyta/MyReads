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
      (!books.error) ? this.setState({ books }): this.setState({ books: [] })
    })
  }

  reloadPageAfterChangeOfShelf = () => {
    this.searchBooks()
  }

  onBackSpaceKeyPress = (event) => {
    let newQuery
    if(event.keyCode === 8){
      newQuery = this.state.query.substr(0, this.state.query.length)
      this.setState({ query: newQuery})
      this.searchBooks()
    }
  }

  render(){

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.inputDone(event.target.value)}
              onKeyDown={this.onBackSpaceKeyPress} />
          </div>
        </div>
        <div className="search-books-results">
          // <div className="books-grid">
          // {
          //   (this.state.books.length > 0) ? (
          //     <div>Showing {this.state.books.length} books for search '{this.state.query}'</div>
          //   ) : (
          //     <div>No books correspond to this search! </div>
          //   )
          // }
          // </div>

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
