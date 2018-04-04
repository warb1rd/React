import React from 'react'
import bookList from './books.json'
// import { Link } from 'react-router-dom'

class Books extends React.Component {

    state = {
      books: bookList,
      filter: ""
    }

    handleFilter(event){
        console.log(event.target.value)
        this.setState = {
          filter: event.target.value
        }
    }

  render() {
    // const { books } = this.props
    return (
      <div className="Books">
        <input ref="title" className="input is-large" type="text" placeholder="Filter The List" onChange={this.handleFilter.bind(this)}/>
        {this.state.books.map((b)=>{
          // {books.map((b) => )}
          return (
          <ul className="menu-list" key={b._id}>
          {/* <Link to={`/books/${b._id}} /> */}
            <li><a href={`/books/${b._id}`}>{b.title}</a></li>
          </ul>
          )
        })}
      </div>
    )
  }
}

export default Books