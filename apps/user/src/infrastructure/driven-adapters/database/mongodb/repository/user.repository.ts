import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Observable, from } from 'rxjs';
import { Model } from 'mongoose';

import { Crud } from "../interface/crud.interface";
import { UserModel } from "../schemas/user.schema";

@Injectable()
export class UserRepository implements Crud<UserModel, UserModel> {

    constructor(
        @InjectModel(UserModel.name)
        private readonly userRepository: Model<UserModel>
    ) { }

    create(entity: UserModel): Observable<UserModel> {
        return from(this.userRepository.create(entity))
    }


    findAll(): Observable<UserModel[]> {
        throw new Error("Method not implemented.");
    }
    findUserById(id: string): Observable<UserModel> {
        throw new Error("Method not implemented.");
    }
    updateUserInfo(id: string, entity: UserModel): Observable<UserModel> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: string): Observable<boolean> {
        throw new Error("Method not implemented.");
    }

}