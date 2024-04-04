import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {User} from './user.entity'

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

    async findOne(id: number): Promise<User> {
        return await this.usersRepository.findOne({
            where : {id}
        });
    }

    async create(user: User) : Promise<void>{
        try{
            await   this.usersRepository.save(user);
        }catch(e){
            console.log(e)
        }
        
    }

    async update(id: number, user: User) : Promise<void>{
        await this.usersRepository.update(id,user);
    }
    
    async delete(id:number) : Promise<void>{
        await this.usersRepository.delete(id);
    }
}
