export default function registerValidation(value) {
    const error = {};

    const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const USERNAME_PATTERN = /^[a-z0-9_-]{3,15}$/g;

    const IMAGE_PATTERN = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    if (value.email === '') {
        error.email = 'Email is required!!!';
    } else if (!(EMAIL_PATTERN).test(value.email)) {
        error.email = 'Email is not valid!!!';
    }

    if (value.username === '') {
        error.username = 'Username is required!!!';
    } else if (!(USERNAME_PATTERN).test(value.username)) {
        error.username = 'Username is not valid!!!';
    }

    if (value.image === '') {
        error.image = 'Image is required!!!';
    } else if (!(IMAGE_PATTERN).test(value.image)) {
        error.image = 'Image is not valid!!!';
    }

    if (value.password === '') {
        error.password = 'Password is required!!!';
    } else if (value.password.length <= 4) {
        error.password = 'Password must be more than 4 char!!!';
    }

    if (value.reppass === '') {
        error.reppass = 'Confirm Password is required!!!';
    } else if (value.reppass !== value.password) {
        error.reppass = 'Password don\t match!!!';
    }

    return error;
}
