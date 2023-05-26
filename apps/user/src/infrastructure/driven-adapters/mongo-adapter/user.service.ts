import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { UserModel, UserRepository } from '../database';
import { UserService } from '../../../application/gateway/user.gateway';

@Injectable()
export class AuthService implements UserService {

  constructor(
    private readonly userRepository: UserRepository
  ) { }

  create(entity: UserModel): Observable<UserModel> {
    return this.userRepository.create(entity)
  }
  
  findAll(): Observable<UserModel[]> {
    throw new Error('Method not implemented.');
  }
  findUserById(id: string): Observable<UserModel> {
    throw new Error('Method not implemented.');
  }
  updateUserInfo(id: string, entity: UserModel): Observable<UserModel> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: string): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

}
