import './profile.css'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { CardProfil } from './CardProfil'

export const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user.wishReadBook)
    return (
        <div className="profile-page">
            <h1>Profile Page</h1>
            <div className="profile">

                <img src={user.image} alt="" />


                <div className="profile-info">
                    <span> {user.email}</span>
                    <span> {user.username}</span>
                </div>

                <div className="edit-btn-profile">
                    <Link to={`/user_edit/${user.id}`}>
                    <button>Edit Profile</button>
                    </Link>
                </div>
            </div>

            <div className="favorite-list">

                <h2>Favorite List</h2>
                <div className="favorite-whrap">

                    {user.wishReadBook.length > 0   ?
                        user.wishReadBook.map(book => <CardProfil key={book.id} book={book}/>)
                        : <div className="no-book">
                            <h2>There Noo Book Found Yet...</h2>
                        </div>}




                </div>


            </div>

        </div>
    )
}
