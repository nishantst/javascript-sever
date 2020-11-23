
const config = {
    create: {
        id: {
            required: true,
            string: true,
            in: ['body'],
            custom: (value) => {
                console.log('Value', value);
                throw { error: 'Error Occured', message: 'Message' };
            }
        },
        name: {
            required: true,
            regex: '',
            in: ['body'],
            errorMessage: 'Name is required',
        },
        role: {
            required: true,
            sting: true,
            in: ['body'],
            errorMessage: 'role is required',
        },
        email: {
            required: true,
            regex: /^[a-zA-Z0-9+_.-]+@successivetech+$/,
            in: ['body'],
            errorMessage: 'email error',
        },
        password: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Password is required'
        }
    },
    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },

    get: {
        skip: {
            required: false,
            default: 1,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        },
        sort: {
            required: false,
            boolean: true,
            in: ['query'],
            errorMessage: 'Sort is invalid',
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
        }
    },
    login: {
        email: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Incorrect email expression',
            password: {
                required: true,
                string: true,
                in: ['body'],
                errorMessage: 'password is required',
            }
        }
    }
};
export default config;
