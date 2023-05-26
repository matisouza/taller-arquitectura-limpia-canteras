import { from, switchMap, Observable } from 'rxjs';

import { hash } from 'bcrypt'

import { UseCase } from '../../../domain/interfaces/use-case.interface';
import { UserModel } from '../../../domain/models/user.model';
import { UserService } from '../../gateway/user.gateway';


export class RegisterUseCase implements UseCase<UserModel, Observable<UserModel>>{

    constructor(
        private readonly userService: UserService,
    ) { }

    execute(args: UserModel): Observable<UserModel> {
        const { password, ...rest } = args
        return from(hash(password, 10))
            .pipe(
                switchMap((hashPassword) => {

                    const newUser: UserModel = {
                        ...rest,
                        password: hashPassword,
                    }

                    return this.userService.create(newUser)
                })
            )
    }

}