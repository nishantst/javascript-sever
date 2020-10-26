
import { diamond, equilateral } from './patterns';
console.log('After calling diamond function from diamond output is')
diamond(6)

console.log("After calling equilateral function from equilateral output is")
equilateral(5)
console.log()

import { getUser1, getUser2, user } from './constants.js';

import { hasPermission } from './utils'
let result = hasPermission(getUser1, 'trainee', 'write')
console.log("After calling hasPermission function from permissions output is")
console.log('Trainee has write permission ',result)
console.log()


import { validateUsers } from './utils'
console.log("After calling validateUsers function from validation output is")
validateUsers(user)
