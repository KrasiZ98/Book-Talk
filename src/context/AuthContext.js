import { createContext, useState } from "react";
import useLocalStorage from "../custom-hooks/hook-localStorage/useLocalStorage";
import { AUTH_DATA_STORAGE } from "../api/api";
import * as authServices from "../services/authServices";
import { useNavigate } from "react-router-dom";
import useGetAllUsers from "../custom-hooks/hooks-requests/useGetAllUsers";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [state, setState] = useLocalStorage(AUTH_DATA_STORAGE, {});
    const [users, setUsers] = useGetAllUsers([]);
    const [serverError, setServerError] = useState(null);
    const navigate = useNavigate();


    console.log(state);

    async function userRegister(user) {
        const allUsers = await authServices.getAllUsers();
        const existingEmail = allUsers.find(x => x.email === user.email);

        if (existingEmail) {
            setServerError("Email is alredy taken...");
            return serverError;
        }

        const existingUsername = allUsers.find(x => x.username === user.username);
        if (existingUsername) {
            setServerError("Username is alredy taken...");
            return serverError;
        }

        await authServices.register(user)
        setState(user);
        navigate('/');

    }

    async function userLogin(user) {
        const allUsers = await authServices.getAllUsers();
        if (allUsers.length === 0) {
            setServerError("Email or password don't match...");
            return serverError;
        } else {
            const existingUser = allUsers.find(x => x.email === user.email);
            if (existingUser === undefined) {
                setServerError("Email or password don't match...");
                return serverError;
            }

            if (existingUser.password !== user.password) {
                setServerError("Email or password don't match...");
                return serverError;
            }

            setState(existingUser);
            navigate('/');
        }
    }


    function userLogout() {
        navigate('/login')
        setState({});
        localStorage.clear(AUTH_DATA_STORAGE);
    }

    async function updateUser(userId, user) {
        const result = await authServices.update(userId, user);
        setUsers(users.map(x => x.id === userId ? result : x));
        navigate('/profile');
        setState(user)
    }

    function addWishReadBooks(book) {
        setState(prevState => ({
            ...prevState,
            wishReadBook: [...prevState.wishReadBook, book]
        }));
        console.log(book)
    }



    return (
        <AuthContext.Provider value={{
            user: state,
            users,
            serverError,
            userRegister,
            userLogin,
            updateUser,
            userLogout,
            addWishReadBooks
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;