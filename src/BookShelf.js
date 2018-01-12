import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    bookArray: PropTypes.array.isRequired,
    shelfChange: PropTypes.func.isRequired
  }

  render(){
    // console.log("Within render");
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.bookArray.map((book) => (
                <li key={book.id}>
                  <Book bookObj={book} shelfChange={this.props.shelfChange}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
