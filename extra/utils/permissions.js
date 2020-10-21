const permissions =
{
    'getUser1': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [],
    },
    'getUser2': {
        all: ['head-trainer'],
        read: ['trainer'],
        write: ['trainer', 'trainee'],
        Delete: [],
    }
}

function hasPermission(moduleName, role, permissionType) {
    const { all, read, write, Delete } = moduleName;
    if (role == 'head-trainer') {
        return true;
    }
    else {
        if (permissionType == 'all') {
            if (all.includes(role))
                return true
            else
                return false;
        }
        if (permissionType == 'read') {
            if (read.includes(role))
                return true;
            else
                return false;
        }
        if (permissionType == 'write') {
            if (write.includes(role))
                return true
            else
                return false;
        }
        if (permissionType == 'Delete') {
            if (Delete.includes(role))
                return true
            else
                return false;
        }

    }
}
const { getUser1, getUser2 } = permissions;
let result = hasPermission(getUser1, 'head-trainer', 'read');
console.log('getUser1:Head-trainer has read permission ', result);
let result1 = hasPermission(getUser2, 'trainer', 'all');
console.log('getUser2:Trainer has all permission ', result1);
let result2 = hasPermission(getUser2, 'trainee', 'Delete');
console.log('getUser2:Trainee has delete permission ', result2);