import React, { useEffect, useState } from 'react'

function getLocalStorage(key, initialState) {
    const localStorage_data = JSON.parse(localStorage.getItem(key));
    if (localStorage_data instanceof Function) {
        return localStorage_data();
    }

    return localStorage_data ? localStorage_data : initialState;
}


export default function useLocalStorage(key, initialState) {
    const [state, setState] = useState(() => {
        return getLocalStorage(key, initialState);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
}
