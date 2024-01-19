export default function createValidation(value) {

    const error = {};

    if (value.title === '') {
        error.title = 'Title is required!!!';
    }

    if (value.author === '') {
        error.author = 'Author is required!!!';
    }

    if (value.genre === '') {
        error.genre = 'Genre is required!!!';
    }

    if (value.rating === '') {
        error.rating = 'Rating is required!!!';
    }

    if (value.image === '') {
        error.image = 'Image is required!!!';
    }

    if (value.description === '') {
        error.description = 'Description is required!!!';
    }

    return error;
}


// title: '',
// author: '',
// genre: '',
// rating: '',
// image: '',
// description: '',