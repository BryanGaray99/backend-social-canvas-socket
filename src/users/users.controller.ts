// users.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './users.dto';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() userDto: UserDto): Promise<User> {
    return this.usersService.createUser(userDto);
  }

  @Get(':telephone')
  findUserByTelephone(@Param('telephone') telephone: string): Promise<User> {
    return this.usersService.findUserByTelephone(telephone);
  }
}
