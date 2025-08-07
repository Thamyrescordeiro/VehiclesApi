import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.update(id, user);
  }
}
