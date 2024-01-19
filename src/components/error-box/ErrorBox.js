import './errorBox.css'
import React from 'react'

export const ErrorBox = ({ error }) => {

    console.log(error)
    return (

        <div className="error-container">
            <div className="error">
                <p>{error}</p>
            </div>
        </div>

    )
}
