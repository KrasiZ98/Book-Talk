import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import * as authServices from '../../services/authServices';
import editUserValidation from '../../components/edit-user/editUserValidation';
import { useParams } from 'react-router-dom';

export default function useUserEdit() {
  
    const {id} = useParams();
  
    const { users, updateUser } = useContext(AuthContext);

    const [formError, setFormError] = useState({});

    const currentUser = users.find(x => x.id === Number(id));

    console.log(currentUser)

  

    const [formValue, setFormValue] = useState({
        email: currentUser.email,
        username: currentUser.username,
        image: currentUser.image,
        password: currentUser.password,
        reppass: currentUser.reppass,
        wishReadBook: currentUser.wishReadBook,
    });


    function onChange(e) {
        setFormValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        const error = editUserValidation(formValue);
        setFormError(error);

        if (Object.values(error).length === 0) {
            updateUser(id, formValue)
        }
    }

    return { formValue, formError, onChange, onSubmit };
}
