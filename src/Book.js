import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component{

  state = {
    shelf: ""
  }

  componentDidMount(){
    BooksAPI.get(this.props.bookObj.id).then((book) => {
      this.setState({ shelf: book.shelf })
    })
  }

  handleChange = (newShelf) => {
    this.setState({ shelf: newShelf })
    BooksAPI.update(this.props.bookObj,newShelf).then(() =>
      this.props.shelfChange()
    )
  }

  render(){
    const {title, authors, imageLinks} = this.props.bookObj
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
    const imageURL = imageLinks.thumbnail ? imageLinks.thumbnail : "http://via.placeholder.com/123x98"
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ backgroundImage: `url(${imageURL})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => this.handleChange(event.target.value)} value={this.state.shelf}>
              <option value="MoveTo" disabled>Move to...</option>
              {
                options.map((opt) => {
                  if(this.state.shelf === opt.id){
                    return <option selected value={opt.id}>{opt.faceValue}</option>
                  }
                  else{
                    return <option value={opt.id}>{opt.faceValue}</option>
                  }
                })
              }
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {
            authors ? authors.join(" ,"): ("")
          }
        </div>
      </div>
    )
  }
}

export default Book
