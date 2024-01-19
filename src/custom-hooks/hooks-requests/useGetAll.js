import React, { useEffect, useState } from 'react'
import { BASE_BOOK_URL_API } from '../../api/api';

export default function useGetAll(initialState) {
    const [books, setBooks] = useState(initialState);
    const [fetchError, setFetchError] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(BASE_BOOK_URL_API);

                if (response.ok == false) {
                    const error = await response.json();
                    setFetchError(error.message);
                    throw new Error(error.message);
                }

                const result = await response.json();
                setBooks(result);
                
            } catch (error) {
                console.error('Fetch data error:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData();

    }, []);

    return { books, setBooks, loading, fetchError };
}
