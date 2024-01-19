import React, { useEffect, useState } from 'react'
import { BASE_USER_URL_API } from '../../api/api';

export default function useGetAllUsers(initialState) {
    const [users, setUsers] = useState(initialState);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(BASE_USER_URL_API);

                if (response.ok == false) {
                    const error = await response.json();

                    throw new Error(error.message);
                }

                const result = await response.json();
                setUsers(result);

            } catch (error) {
                console.error('Fetch data error:', error)
            }
        }

        fetchData();

    }, []);

    return [users, setUsers];

}
