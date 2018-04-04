import React from 'react'
// import bookList from './books.json'

class BookDetail extends React.Component {

  render() {
    console.log(this.props.book)
    const { book } = this.props
    return (
      <div className="Book content">
        <div className="columns">
          <div className="column">
            <img alt={book.title} src={`../${book.imageLink}`} />
          </div>
          <div className="column">
            <h1 className="title is-2">{book.title}</h1>
            <h2 className="title is-3">{book.author}</h2>
            <ul>
              <li>Year: {book.year}</li>
              <li>Pages: {book.pages}</li>
              <li>Language: {book.language}</li>
              <li>Country: {book.country}</li>
              <li><a href={book.link}>Wikipedia</a></li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default BookDetail