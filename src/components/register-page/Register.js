import { Link } from 'react-router-dom'
import './register.css'
import React, { useContext } from 'react'
import useFormRegister from '../../custom-hooks/hooks-forms/useFormRegister'
import { ErrorBox } from '../error-box/ErrorBox'
import { AuthContext } from '../../context/AuthContext'

export const Register = () => {
    const { serverError } = useContext(AuthContext);
    const { formValue, formError, onChange, onSubmit } = useFormRegister();
    return (

        <>
            {serverError && <ErrorBox error={serverError} />}
            {formError.email && <ErrorBox error={formError.email} />}
            {formError.username && <ErrorBox error={formError.username} />}
            {formError.image && <ErrorBox error={formError.image} />}
            {formError.password && <ErrorBox error={formError.password} />}
            {formError.reppass && <ErrorBox error={formError.reppass} />}
            <section className="register-section">


                <div className="form" onSubmit={onSubmit}>
                    <h1>REGISTER </h1>

                    <form >
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email"
                                onChange={onChange} value={formValue.email} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username"
                                onChange={onChange} value={formValue.username} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="text" id="image" name="image"
                                onChange={onChange} value={formValue.image} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password"
                                onChange={onChange} value={formValue.password} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="reppass">Confirm Password</label>
                            <input type="password" id="reppass" name="reppass"
                                onChange={onChange} value={formValue.reppass} />
                        </div>

                        <div className="form-group">
                            <button type="submit">Login</button>
                        </div>
                    </form>

                    <span> Have An Account? <Link to="/login">Login</Link></span>
                </div>

            </section>
        </>
    )
}
