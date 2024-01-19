import { BASE_BOOK_URL_API } from "../api/api";

export async function create(book) {
    try {
        const response = await fetch(BASE_BOOK_URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
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

export async function update(bookId, book) {
    try {
        const response = await fetch(`${BASE_BOOK_URL_API}/${bookId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
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

export async function remove(bookId) {
    try {
        const response = await fetch(`${BASE_BOOK_URL_API}/${bookId}`, {
            method: "DELETE",
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