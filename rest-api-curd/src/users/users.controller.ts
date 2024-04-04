import { Controller,Get,Post,Body,Param,Delete,Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ){}

    @Get()
    async findAll(): Promise<User[]>{
        return await this.usersService.findAll();
    }

    @Get(":id")
    async findOne(id: number): Promise<User>{
        const user= this.usersService.findOne(id);
        if(!user) throw new Error("User not found"); //TODO: Throw Error in a right way
        return user;
    }

    @Post()
    async create(@Body() user:User) : Promise<void>{
        await this.usersService.create(user);
    }

    @Put(":id")
    async update(id: number, @Body() user:User) : Promise<void>{
        const targetUser= this.usersService.findOne(id);
        if(!targetUser) throw new Error("User not found"); //TODO: Throw Error in a right way
        this.usersService.update(id,user);
    }

    @Delete(":id")
    async delete(id: number) : Promise<void>{
        const user= this.usersService.findOne(id);
        if(!user) throw new Error("User not found"); //TODO: Throw Error in a right way
        this.usersService.delete(id);
    }
}
