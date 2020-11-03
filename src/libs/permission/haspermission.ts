import IPermission from './interface';
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
        write: ['trainee'],
        Delete: ['trainer'],
    }
};
export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean {
    for (const [key, value] of Object.entries(permissions)) {
        if (key === moduleName) {
            if (value.all.indexOf(role) !== -1) {
                return true;
            }
            else {
                for (const [key1, value1] of Object.entries(value)) {
                    if (key1 === permissionType) {
                        if (Object.values(value1).includes(role)) {
                            return true;
                        }
                        return false;
                    }
                    else {
                        continue;
                    }
                }
            }
        }
        else {
            continue;
        }
    }
}
