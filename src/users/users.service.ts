import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {User} from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
){
}
 
  async findAll(): Promise<User[]>{
    return await  this.usersRepository.find();
  }

  async findOlerThanThirtiesUsers(): Promise<User[]>{
    return await  this.usersRepository.
    createQueryBuilder().
    select("user")
    .from(User, "user")
    .where("user.age=:age",{ age: 30})
    .getMany();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne({
        where : {id}
    });
  }

  async create(user: CreateUserDto) : Promise<void>{
    const newUser=this.usersRepository.create(user)
    await   this.usersRepository.save(newUser);
  }

  async update(id: number, user: UpdateUserDto) : Promise<void>{
    await this.usersRepository.update(id,user);
  }

  async remove(id:number) : Promise<void>{
    await this.usersRepository.delete(id);
  }
}
