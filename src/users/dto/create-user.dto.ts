
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {

    @ApiProperty({ example: "Ahmad Aghazadeh"})
    name : string;

    @ApiProperty({ example: "Ahmad.Aghazadeh.a@gmail.com"})
    email :string;

    @ApiProperty({ example: 40})
    age : number;
}


 