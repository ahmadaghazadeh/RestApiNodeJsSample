import { Controller,Get,Post,Body,Param,Delete,Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from './user.dto';
@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ){}

    @Get()
    async findAll(): Promise<User[]>{
        return await this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User>{
        const user= this.usersService.findOne(id);
        if(!user) throw new Error('User not found'); //TODO: Throw Error in a right way
        return user;
    }

    @Post()
    async create(@Body() userDto:UserDto) : Promise<void>{
        await this.usersService.create(userDto);
    }

    @Put(":id")
    async update(@Param('id') id: number, @Body() userDto:UserDto) : Promise<void>{
        const targetUser= this.usersService.findOne(id);
        if(!targetUser) throw new Error("User not found"); //TODO: Throw Error in a right way
        this.usersService.update(id,userDto);
    }

    @Delete(":id")
    async delete(@Param('id') id: number) : Promise<void>{
        const user= this.usersService.findOne(id);
        if(!user) throw new Error("User not found"); //TODO: Throw Error in a right way
        this.usersService.delete(id);
    }
}
