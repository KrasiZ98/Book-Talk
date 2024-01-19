import { Link } from 'react-router-dom'
import './navigation.css'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export const Navigation = () => {
    const { user, userLogout } = useContext(AuthContext);
    return (
        <header className="header">
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/022/242/738/small/smart-learning-education-book-shop-store-logo-design-template-free-vector.jpg" alt="image logo" />
            </div>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/catalog">Catalog</Link>
                </li>
                {user.email ?
                    <>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/create">Create</Link>
                        </li>
                        <li>
                            <Link onClick={userLogout}>Logout</Link>
                        </li>
                    </>
                    :
                    <>  <li>
                        <Link to="/login">Login</Link>
                    </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>}

            </ul>
        </header>
    )
}
