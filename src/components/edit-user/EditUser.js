import React from 'react'
import useFormEdit from '../../custom-hooks/hooks-forms/useFormEdit'
import useUserEdit from '../../custom-hooks/hooks-forms/useUserEdit';

export const EditUser = () => {
    const { formValue, formError, onChange, onSubmit } = useUserEdit();
  return (
    <>
    {/* {serverError && <ErrorBox error={serverError} />}
    {formError.email && <ErrorBox error={formError.email} />}
    {formError.username && <ErrorBox error={formError.username} />}
    {formError.image && <ErrorBox error={formError.image} />}
    {formError.password && <ErrorBox error={formError.password} />}
    {formError.reppass && <ErrorBox error={formError.reppass} />} */}
    <section className="register-section">


        <div className="form"
        onSubmit={onSubmit}
        >
            <h1>Edit User</h1>

            <form >
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email"
                        onChange={onChange} value={formValue.email} 
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username"
                        onChange={onChange} value={formValue.username} 
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" name="image"
                        onChange={onChange} value={formValue.image} 
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"
                        onChange={onChange} value={formValue.password} 
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="reppass">Confirm Password</label>
                    <input type="password" id="reppass" name="reppass"
                        onChange={onChange} value={formValue.reppass} 
                        />
                </div>

                <div className="form-group">
                    <button type="submit">Edit User</button>
                </div>
            </form>


        </div>

    </section>
</>
  )
}
