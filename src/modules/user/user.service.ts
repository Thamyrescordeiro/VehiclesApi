import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  async create(user: CreateUserDto): Promise<User> {
    const emailAlreadyExists = await this.userModel.findOne({
      where: { email: user.email },
    });

    if (emailAlreadyExists) {
      throw new BadRequestException('Email already exists');
    }
    const createUser = await this.userModel.create(user);
    return createUser;
  }
  async findAll() {
    return await this.userModel.findAll();
  }
  async update(id: string, user: UpdateUserDto) {
    const emailAlreadyExists = await this.userModel.findOne({
      where: { email: user.email, user_id: id },
    });

    if (emailAlreadyExists) {
      throw new BadRequestException('Email already exists');
    }

    const updatedUser = await this.userModel.update(
      { ...user },
      { where: { user_id: id }, returning: true },
    );
    return updatedUser[1][0];
  }
}
