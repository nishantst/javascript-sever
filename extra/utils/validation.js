const user =
    [
        {
            traineeEmail: 'trainee1@successive.tech',
            reviewerEmail: 'reviewer1@successive.tech',
        },
        {
            traineeEmail: 'trainee2@successive.tech',
            reviewerEmail: 'reviewer2@successive.tech',
        },
        {
            traineeEmail: 'trainee3uccessive.tech',
            reviewerEmail: 'reviewer3@successive.tech',
        },
        {
            traineeEmail: 'trainee4@successive.tech',
            reviewerEmail: 'reviewer4uccessive.tech',
        },
        {
            traineeEmail: 'trainee5@gmail.tech',
            reviewerEmail: 'reviewer5@successive.tech',
        }
    ]

function validateEmail(Email) {
    RegExp = "^[a-zA-Z0-9+_.-]+@successive.tech+$";
    let str = Boolean(Email.match(RegExp));
    return str;
}


function validateUsers(user) {
    let valid = 0;
    let invalid = 0;

    user.forEach(({ traineeEmail, reviewerEmail }) => {

        if (validateEmail(reviewerEmail) && validateEmail(traineeEmail)) {
            valid++;
            console.log("Valid User : ", traineeEmail, reviewerEmail);
        }
        else {
            invalid++;
            console.log("Invalid User : ", traineeEmail, reviewerEmail);
        }
    });
    console.log("Valid Users Count : ", valid);
    console.log("Invalid Users Count : ", invalid);

}

validateUsers(user);
