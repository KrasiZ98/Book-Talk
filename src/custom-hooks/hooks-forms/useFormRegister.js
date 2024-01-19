import React, { useContext, useState } from 'react'
import registerValidation from '../../components/register-page/registerValidation';
import { AuthContext } from '../../context/AuthContext';

export default function useFormRegister() {

    const { userRegister } = useContext(AuthContext);

    const [formError, setFormError] = useState({});

    const [formValue, setFormValue] = useState({
        email: '',
        username: '',
        image: '',
        password: '',
        reppass: '',
        wishReadBook: []
    });


    function onChange(e) {
        setFormValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        const error = registerValidation(formValue);
        setFormError(error);

        if (Object.values(error).length === 0) {
            userRegister(formValue);
        }
    }

    return { formValue, formError, onChange, onSubmit };
}

