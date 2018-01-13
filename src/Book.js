import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component{

  state = {
    shelf: this.props.bookObj.shelf
  }

  handleChange = (newShelf) => {
    this.setState({ shelf: this.props.bookObj.shelf })
    BooksAPI.update(this.props.bookObj, newShelf).then(() => this.props.shelfChange())
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
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={imageLinks ? { backgroundImage: `url(${imageLinks.thumbnail})` }:{}}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => this.handleChange(event.target.value)} value={this.state.shelf}>
              <option value="none" disabled>Move to...</option>
              {
                options.map((opt) => {
                  console.log(this.state.shelf, this.props.bookObj);
                  if(typeof (this.state.shelf) === 'undefined' && (opt.id === "none")){
                    return <option selected value={opt.id}>{opt.faceValue}</option>
                  }
                  else if(typeof (this.state.shelf) !== 'undefined' && this.state.shelf === opt.id){
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
