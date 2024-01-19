import { Link } from 'react-router-dom'
import './catalog.css'
import React, { useContext } from 'react'
import { BooksContext } from '../../context/BooksContext'
import { Card } from './Card'

export const Catalog = () => {
    const { books,loading, fetchError } = useContext(BooksContext);
    if(loading) {
        return <h1>Loading..</h1>
    }

    if(fetchError) {
        return <h1>{fetchError}</h1>
    }
    return (
        <section className="catalog">
            <h1>Book Catalog</h1>
            <div className="div-whrap">

                {books.length > 0 ?
                    books.map(book => <Card key={book.id} book={book} />) :
                    <div className="no-book">
                        <h2>There Noo Book Found Yet...</h2>
                    </div>}


            </div>
        </section>
    )
}
