import { validateEmail } from './helpers.js';
export function validateUsers(user:IUser[]):void {
    let valid = 0;
    let invalid = 0;

    user.forEach(({ traineeEmail, reviewerEmail }) => {

        if (validateEmail(reviewerEmail) && validateEmail(traineeEmail)) {
            valid++;
            console.log("Valid User : ", traineeEmail, reviewerEmail);
            console.log()
        }
        else {
            invalid++;
            console.log("Invalid User : ", traineeEmail, reviewerEmail);
            console.log()
        }
    });
    console.log("Valid Users Count : ", valid);

    console.log("Invalid Users Count : ", invalid);

}
