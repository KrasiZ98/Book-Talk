import { Link } from 'react-router-dom'
import './login.css'
import React, { useContext } from 'react'
import useFormLogin from '../../custom-hooks/hooks-forms/useFormLogin'
import { ErrorBox } from '../error-box/ErrorBox'
import { AuthContext } from '../../context/AuthContext'

export const Login = () => {
    const { serverError } = useContext(AuthContext);
    console.log(serverError)
    const { formValue, formError, onChange, onSubmit } = useFormLogin()
    return (
        <>
            {serverError && <ErrorBox error={serverError} />}
            {formError.email && <ErrorBox error={formError.email} />}
            {formError.password && <ErrorBox error={formError.password} />}
            <section className="login-section">

                <div className="form">
                    <h1>LOGIN </h1>

                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="password">Email</label>
                            <input type="text" id="email" name="email"
                                onChange={onChange} value={formValue.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password"
                                onChange={onChange} value={formValue.password} />
                        </div>

                        <div className="form-group">
                            <button type="submit">Login</button>
                        </div>
                    </form>

                    <span>Dont Have An Account? <Link to="/register">Register</Link></span>
                </div>

            </section>
        </>
    )
}
