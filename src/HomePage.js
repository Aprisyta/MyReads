import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class HomePage extends Component{

  state = {
    books: []
  }

  getAllBooksRequest = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount(){
    this.getAllBooksRequest()
  }

  bookArrayForShelf = (shelfID) => {
    const bookArray = this.state.books.filter((book) => book.shelf === shelfID)
    return bookArray
  }

  reloadPageAfterChangeOfShelf = () => {
    this.getAllBooksRequest()
    // this.forceUpdate()
  }

  render(){
    const shelfs = [
      {
        id: "currentlyReading",
        faceValue: "Currently Reading"
      },
      {
        id: "wantToRead",
        faceValue: "Want to Read"
      },
      {
        id: "read",
        faceValue: "Read"
      }
    ]

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {
          shelfs.map((shelf) => (
            <li key={shelf.id} style={{listStyleType: 'none'}}>
              <BookShelf
                shelfTitle={shelf.faceValue}
                bookArray={this.bookArrayForShelf(shelf.id)}
                shelfChange={this.reloadPageAfterChangeOfShelf} />
            </li>
          ))
        }
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default HomePage
