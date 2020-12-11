import UserRepository from '../Repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import configuration from '../config/configuration';

export default async () => {
    const userRepository: UserRepository = new UserRepository();
    await userRepository.count()
        .then(res => {
            if (res === 0) {
                const saltRounds = 10;
                const password = configuration.Password;
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(password, salt);
                console.log('Data seeding in progress');
                userRepository.create({
                    name: 'Anil Kumar',
                    email: 'headtrainer@successivetech',
                    role: 'head-trainer',
                    password: hash
                }, null);
                userRepository.create({
                    name: 'Vinay Chaudhary',
                    email: 'trainer@successivetech',
                    role: 'trainer',
                    password: hash
                }, null);
            }
        })
        .catch(err => console.log(err));
};
