type Access = {
   all: string[];
   read: string[];
   write: string[];
   Delete: string[];
};

interface IPermission {
    getUser1: Access;
    getUser2: Access;
}

interface IUser {
    traineeEmail: string;
    reviewerEmail: string;
}