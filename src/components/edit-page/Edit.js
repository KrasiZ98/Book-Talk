import { useParams } from 'react-router-dom'
import useFormEdit from '../../custom-hooks/hooks-forms/useFormEdit'
import './edit.css'
import React from 'react'

export const Edit = () => {
    const {id} = useParams()
    const { formValue, formError, onChange, onSubmit } = useFormEdit(id);
    return (
        <section className="edit-section">

            <div className="form">
                <h1>EDIT </h1>

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title"
                            onChange={onChange} value={formValue.title} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" name="author"
                            onChange={onChange} value={formValue.author} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <input type="text" id="genre" name="genre"
                            onChange={onChange} value={formValue.genre} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <input type="text" id="rating" name="rating"
                            onChange={onChange} value={formValue.rating} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="text" id="image" name="image"
                            onChange={onChange} value={formValue.image} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" name="description"
                            onChange={onChange} value={formValue.description} />
                    </div>

                    <div className="form-group">
                        <button type="submit">Edit</button>
                    </div>
                </form>


            </div>

        </section>
    )
}
