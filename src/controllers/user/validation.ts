
const config = {
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
