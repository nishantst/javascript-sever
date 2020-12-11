type Access = {
   all: string[];
   read: string[];
   write: string[];
   Delete: string[];
};

export interface IPermission {
    getUser1: Access;
    getUser2: Access;
}

export interface IUser {
    traineeEmail: string;
    reviewerEmail: string;
}