import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { BooksContext } from '../../context/BooksContext';
import createValidation from '../../components/create-page/createValidation';

export default function useFormCreate() {

    const { bookCreate } = useContext(BooksContext);

    const { user } = useContext(AuthContext);

    const [formError, setFormError] = useState({});

    const [formValue, setFormValue] = useState({
        title: '',
        author: '',
        genre: '',
        rating: '',
        image: '',
        description: '',
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
        const error = createValidation(formValue);
        setFormError(error);

        if (Object.values(error).length === 0) {
            bookCreate(formValue);
        }
    }

    return { formValue, formError, onChange, onSubmit };
}
