// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(userDto: UserDto): Promise<User> {
    const user = this.userRepository.create(userDto);
    return this.userRepository.save(user);
  }

  async findUserByTelephone(telephone: string): Promise<User> {
    return this.userRepository.findOne({ where: { telephone } });
  }

  async findUserById(id_user: number): Promise<User> {
    return this.userRepository.findOne({ where: { id_user } });
  }
}
