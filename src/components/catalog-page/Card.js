import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({book}) => {
  return (
    <div className="book-card">
    <div className="book-info">
        <img src={book.image} alt="" />
    </div>
    <div className="info">
        <h2>{book.title}</h2>
    </div>
    <div className="details-btn">
        <Link to={`/details/${book.id}`}>Details</Link>
    </div>
</div>
  )
}
