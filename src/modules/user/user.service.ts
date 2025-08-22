import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { hashSync as bcryptHashSync } from 'bcrypt';
import { QueryUserDto } from './dtos/query-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

   async create(user: CreateUserDto) {
    await this.validateEmail(user.email)

    const createdUser = await this.userModel.create({
      ...user,
      password: bcryptHashSync(user.password, 10),
    });

    return createdUser
  }
   async findAll(query: QueryUserDto) {
  const page = query.page!;
  const limit = query.limit!;
  const offset = (page - 1) * limit;

const { rows, count } = await this.userModel.findAndCountAll({
  limit,
  offset,
  order: [['createdAt', 'DESC']],
});

return {
  data: rows,
  total: count,
  page,
  limit,
  totalPages: Math.ceil(count / limit),
};
}
  async findAllActive() {
  return await this.userModel.findAll({ where: { active: true } });
}

  async findOne(user_id: string): Promise<User> {
    const user = await this.userModel.findByPk(user_id);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }
  async update(id: string, user: UpdateUserDto) {
    if (user.email) {
      await this.validateEmail(user.email);
    }

    const updatedUser = await this.userModel.update(
      { ...user },
      { where: { user_id: id }, returning: true },
    );

    return updatedUser[1][0];
  }

  async deactivate(user_id: string): Promise<{ message: string }> {
  const user = await this.findOne(user_id); 

  await this.userModel.update(
    { active: false },
    { where: { user_id: user_id } }
  );

  return { message: 'user account deactivated' };
}
  async validateEmail(email: string) {
    const emailAlreadyExists = await this.userModel.findOne({
      where: { email: email },
    });

    if (emailAlreadyExists) {
      throw new HttpException(
        'Esse email já está em uso',
        HttpStatus.BAD_REQUEST,
      );
    }

    return true;
  }
}
