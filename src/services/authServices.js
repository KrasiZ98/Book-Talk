import { BASE_USER_URL_API } from "../api/api";

export async function register(user) {
    try {
        const response = await fetch(BASE_USER_URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        console.error(error);
        return error;
    }
}


export async function getAllUsers() {
    try {
        const response = await fetch(BASE_USER_URL_API);

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }
        return await response.json();

    } catch (error) {
        console.error(error);
        return error;
    }
}

export async function update(userId, user) {
    try {
        const response = await fetch(BASE_USER_URL_API + '/' + userId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        console.error(error);
        return error;
    }
}