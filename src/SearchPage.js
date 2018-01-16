import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { DebounceInput } from 'react-debounce-input'

class SearchPage extends Component{

  state = {
    query: "",
    books: []
  }

  inputDone = (query) => {
    this.setState({ query })
    this.searchBooks()
  }

  searchBooks = () => {
    BooksAPI.search(this.state.query === '' ? 'z' : this.state.query).then((books) => {
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
            <DebounceInput type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              debounceTimeout={300}
              onChange={(event) => this.inputDone(event.target.value)}
              onKeyDown={this.onBackSpaceKeyPress} />
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
