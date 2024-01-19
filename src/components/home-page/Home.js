import './home.css'
import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="home">
            <div className="home-info">
                <h1>Booking Read</h1>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.</p>
                </div>
                <Link to="/catalog">See All</Link>
            </div>

            <div className="book-img">
               
                <img src="https://thumbs.dreamstime.com/b/open-book-hardback-books-wooden-table-education-background-back-to-school-copy-space-text-76106466.jpg" alt="Book Image" />
            </div>
        </div>
    )
}
