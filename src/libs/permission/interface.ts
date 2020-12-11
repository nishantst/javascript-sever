type Access = {
    all: string[];
    read: string[];
    write: string[];
    Delete: string[];
};

export default interface IPermission {
    getUser1: Access;
    getUser2: Access;
}