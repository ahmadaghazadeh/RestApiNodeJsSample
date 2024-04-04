import { ApiProperty } from '@nestjs/swagger';



export class UserDto
{
    @ApiProperty({ example: "1"})
    id: number;

    @ApiProperty({ example: "Ahmad Aghazadeh"})
    name : string;

    @ApiProperty({ example: "Ahmad.Aghazadeh.a@gmail.com"})
    email :string;
}