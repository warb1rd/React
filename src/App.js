import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import BookList from './BookList'
import BookDetail from './BookDetail'
import './App.css'

// OUR TOP 100 BOOKS IS A JSON ARRAY THAT CAN BE IMPORTED AND IS PARSED AUTOMATICALLY BY REACT!
import bookList from './books.json'
// try uncommenting the following line and looking at the list in your browser console:
// console.log(bookList)

class App extends Component {

  state = {
    books: bookList
  }

  render() {
    return (
      <div className="App">
        {/* Redirect to "/books" from the "/" root URL */}
        <Route exact path="/" render={() => {
          return <Redirect to="/books" />
        }} />
         

        <div className="section">
          {/* TITLE */}
          <h1 className="title is-1 has-text-centered">Top 100 Books Of All Time</h1>
          
          <div className="columns">
            
            {/* Left Column */}
            <div className="column is-4">
              <Route path="/books" render={(routeProps) => {
                  const { books } = this.state
                  console.log(routeProps)
                  return <BookList books={books}/>
              }} />
            </div>

            {/* Right Column */}
            <div className="column is-8">
            <Route path="/books/:id" render={(routeProps) => {                                //Route will render only if it matches the path
                  const { books } = this.state
                  const book = books.find((b) => {
                    return b._id === routeProps.match.params.id
                  })                                                                          //Find the book by its id.Runs the callback function once for each book untill it returns truthy value and returns the first match to the id. 
                  console.log(book)
                  return <BookDetail book={book}/>
              }} />
              
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
