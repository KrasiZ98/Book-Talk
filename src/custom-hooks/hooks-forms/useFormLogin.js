import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import loginValidation from '../../components/login-page/loginValidation';

export default function useFormLogin() {
    const { userLogin } = useContext(AuthContext);

    const [formError, setFormError] = useState({});

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
       
    });


    function onChange(e) {
        setFormValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        const error = loginValidation(formValue);
        setFormError(error);

        if (Object.values(error).length === 0) {
            userLogin(formValue);
        }
    }

    return { formValue, formError, onChange, onSubmit };
}
