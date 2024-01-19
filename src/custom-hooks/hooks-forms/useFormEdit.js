import React, { useContext, useState } from 'react'
import { BooksContext } from '../../context/BooksContext';
import { AuthContext } from '../../context/AuthContext';
import editValidation from '../../components/edit-page/editValidation';
import useGetById from '../hooks-requests/useGetById';
import { useParams } from 'react-router-dom';

export default function useFormEdit() {

    const {id } =  useParams();

    const { books, bookUpdate } = useContext(BooksContext);

    const { user } = useContext(AuthContext);

    const [formError, setFormError] = useState({});

    const currentBook = books.find(x => x.id === Number(id));


    const [formValue, setFormValue] = useState({
        title: currentBook.title,
        author: currentBook.author,
        genre: currentBook.genre,
        rating: currentBook.rating,
        image: currentBook.image,
        description: currentBook.description,
        ownerId: user.id
    });

    function onChange(e) {
        setFormValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        const error = editValidation(formValue);
        setFormError(error);

        if (Object.values(error).length === 0) {
            bookUpdate(id,  formValue);
        }
    }

    return { formValue, formError, onChange, onSubmit };
}
