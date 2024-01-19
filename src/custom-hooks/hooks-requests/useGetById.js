import React, { useEffect, useState } from 'react'
import { BASE_BOOK_URL_API } from '../../api/api';

export default function useGetById(bookId, initialState) {
    const [book, setBook] = useState(initialState);
    const [fetchError, setFetchError] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(BASE_BOOK_URL_API + '/' + bookId);

                if (response.ok == false) {
                    const error = await response.json();
                    setFetchError(error.message);
                    throw new Error(error.message);
                }

                const result = await response.json();
                setBook(result);

            } catch (error) {
                console.error('Fetch data error:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData();

    }, []);

    return {book, setBook, fetchError, loading};
}
