import { Link, useParams } from 'react-router-dom'
import './details.css'
import React, { useContext, useEffect, useState } from 'react'
import useGetById from '../../custom-hooks/hooks-requests/useGetById';
import { AuthContext } from '../../context/AuthContext';
import { BooksContext } from '../../context/BooksContext';

export const Details = () => {
  const { id } = useParams();
  const { user, addWishReadBooks } = useContext(AuthContext);
  const { book, setBook, fetchError, loading } = useGetById(id, []);
  const { bookDelete } = useContext(BooksContext);

  const isOwner = book.ownerId === user.id;
  const [isAdd, setIsAdd] = useState(user.wishReadBook)


  if (user.email !== undefined) {

  }




  console.log(isAdd)


  // const addToWish = user  && user.wishReadBook.find(x => x.id === book.id);


  if (loading) {
    return <h1>Loading...</h1>
  }

  if (fetchError) {
    return <h1>{fetchError}</h1>
  }


  return (
    <div className="details-page">
      <h1>Details Book</h1>
      <div className="details-info">
        <div className="info">
          <h1>
            {book.title}
          </h1>

          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Rating: {book.rating}</p>
          <p>Description: {book.description}</p>



          {isOwner &&
            <div className="action-btn">
              <Link to={`/edit/${book.id}`}>
                <button className="edit-btn">Edit Book</button>
              </Link>
              <button onClick={() => bookDelete(book.id, book.title)} className="delete-btn">Delete Book</button>
            </div>
          }


          {(user.email && user.wishReadBook.find(x => x.id === book.id) == undefined) && isOwner === false &&
            <div className="action-btn">
              <button onClick={() => addWishReadBooks(book)} className="read-btn">Read Book</button>
            </div>
          }

          {(user.email && user.wishReadBook.find(x => x.id === book.id)) !== undefined &&
            <div className="action-btn">
              <button className="readed-btn">You Alredy Add To Read Book</button>
            </div>
          }

          {/* <div className="action-btn">
            <button className="edit-btn">Edit Book</button>
            <button className="delete-btn">Delete Book</button>
            <button className="read-btn">Read Book</button>
            <button className="readed-btn">You Alredy Add To Read Book</button>
          </div> */}

        </div>

        <div className="book-img">
          <img src={book.image} alt="" />
        </div>
      </div>
    </div>
  )
}
