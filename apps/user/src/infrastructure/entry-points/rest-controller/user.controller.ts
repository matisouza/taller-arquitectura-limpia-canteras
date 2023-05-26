import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';

import { RegisterUseCase } from '../../../application/usercase/auth/register.usecase';
import { AuthService } from '../../driven-adapters/mongo-adapter/user.service';
import { UserModel } from '../../driven-adapters';
import { UserDto } from '../../dto/user.dto';

@Controller()
export class UserController {

  private registerUseCase: RegisterUseCase

  constructor(
    private readonly userService: AuthService,

  ) {
    this.registerUseCase = new RegisterUseCase(this.userService)
  }

  @Post()
  handleRegsiter(@Body() resgisterBody: UserDto): Observable<UserModel> {
    return this.registerUseCase.execute(resgisterBody)
  }

  
}
