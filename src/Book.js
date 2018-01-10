import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component{

  state = {
    shelf: this.props.bookObj.shelf
  }

  handleChange = (newShelf) => {
    console.log("Hi Book");
    BooksAPI.update(this.props.bookObj, newShelf).then(() => this.props.shelfChange())

    // this.forceUpdate()
  }

  render(){
    const {title, authors, imageLinks} = this.props.bookObj
    console.log(this.state.shelf);
    const options = [
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
      },
      {
        id: "none",
        faceValue: "None"
      }
    ]
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})`}}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => this.handleChange(event.target.value)} value={this.state.shelf}>
              <option value="none" disabled>Move to...</option>
              {
                options.map((opt) =>
                // (<option value="`${opt.id}`" selected={opt.id === this.state.shelf}>{opt.faceValue}</option>)
                {
                  if(this.state.shelf === opt.id){
                    return <option selected value={opt.id}>{opt.faceValue}</option>
                  }
                  else{
                    return <option value={opt.id}>{opt.faceValue}</option>
                  }
                }
              )
              }
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {
            authors.map((author) => (
              <div>{author}</div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Book
