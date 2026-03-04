import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: number) {
    const userToSearch = await this.usersRepository.findOne({
      where: { id },
    });

    if (!userToSearch) {
      throw new HttpException('User not found', 404);
    }

    return userToSearch;
  }

  async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new HttpException('User with this email already exists', 400);
    }

    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  async deleteUser(id: number) {
    const userToDelete = await this.usersRepository.findOne({
      where: { id },
    });

    if (!userToDelete) {
      throw new HttpException('User not found', 404);
    }

    await this.usersRepository.remove(userToDelete);
    return { message: 'User deleted successfully' };
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const userToUpdate = await this.usersRepository.findOne({
      where: { id },
    });

    if (!userToUpdate) {
      throw new HttpException('User not found', 404);
    }

    Object.assign(userToUpdate, updateUserDto);
    await this.usersRepository.save(userToUpdate);
    return {
      message: 'User updated successfully',
    };
  }
}
