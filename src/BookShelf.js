import React from 'react'
// import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = props => {
  const { shelfTitle, bookArray, shelfChange } = props;
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            bookArray.map((book) => (
              <li key={book.id}>
                <Book bookObj={book} shelfChange={shelfChange}/>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  shelfTitle: React.PropTypes.string.isRequired,
  bookArray: React.PropTypes.array.isRequired,
  shelfChange: React.PropTypes.func.isRequired
}

export default BookShelf
