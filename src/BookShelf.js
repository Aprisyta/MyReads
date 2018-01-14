import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = props => {
  BookShelf.propTypes = {
    shelfTitle: React.PropTypes.string.isRequired,
    bookArray: React.PropTypes.array.isRequired,
    shelfChange: React.PropTypes.func.isRequired
  }
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            props.bookArray.map((book) => (
              <li key={book.id}>
                <Book bookObj={book} shelfChange={props.shelfChange}/>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
