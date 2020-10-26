const permissions: IPermission = {
    'getUser1': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [],
    },
    'getUser2': {
        all: ['trainer'],
        read: ['trainee'],
        write: ['trainer'],
        Delete: ['head-trainer'],
    }};

const user: IUser [] =
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
    ];

export { permissions , user };
