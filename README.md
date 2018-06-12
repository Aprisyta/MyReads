# MyReads app

MyReads is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. You can also search books you want to read and add them to shelf.

## Installation

To install the app do as the follows:

`git clone https://github.com/Aprisyta/MyReads.git`
`cd MyReads`
`npm install`
`npm start`

This will launch the app in the desktop browser.

## Backend Server

The app interacts with backend server through `bookAPI.js` containing methods:

  -`getAll` : To retrieve JSON object containg collection of books present in bookshelf
  -`update` : To update the shelf of a book.
  -`search` : To search all the books present under a category

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

To contribute, refer `CONTRIBUTING.md`.
