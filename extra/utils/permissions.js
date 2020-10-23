export function hasPermission(moduleName, role, permissionType) {
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
