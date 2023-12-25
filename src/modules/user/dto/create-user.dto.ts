import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { IsUnique } from '../../../decorators/isUnique.decorator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: '000.000.000-00' })
  @IsString()
  @IsUnique({ tableName: 'users', column: 'cpf' })
  cpf: string;

  @ApiProperty({ example: 'JohnDoe@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Tiger-Tiger' })
  @IsString()
  password: string;
}
