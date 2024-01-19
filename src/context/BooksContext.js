import { createContext, useState } from "react";
import useGetAll from "../custom-hooks/hooks-requests/useGetAll";
import * as bookServices from "../services/bookServices";
import { useNavigate } from "react-router-dom";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {

    const { books, setBooks, loading, fetchError } = useGetAll([]);
    const [serverError, setServerError] = useState(null);
    const naviagte = useNavigate();

    async function bookCreate(book) {
        const result = await bookServices.create(book);
        if (result.message) {
            setServerError(result.message);
            return serverError;
        }

        setBooks(oldBooks => [...oldBooks, result]);
        naviagte('/catalog');
    }

    async function bookUpdate(bookId, book) {
        const result = await bookServices.update(bookId, book);
        if (result.message) {
            setServerError(result.message);
            return serverError;
        }

        console.log(books.map(x => x.id == bookId))

        setBooks(books.map(x => x.id === bookId ? result : x));
        naviagte(`/details/${bookId}`);
    }

    async function bookDelete(bookId, bookName) {
        await bookServices.remove(bookId);
        const confirm = window.confirm(`Are you shure you want to delete ${bookName}`);
        if (confirm) {
            setBooks(books.filter(x => x.id !== bookId));
            naviagte('/catalog');
        } else {
            return;
        }
    }


    return (
        <BooksContext.Provider value={{ books, loading, serverError, fetchError, bookCreate, bookUpdate, bookDelete }}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;